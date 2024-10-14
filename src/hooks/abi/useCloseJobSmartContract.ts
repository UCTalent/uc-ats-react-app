import useMutateCancelJob from "hooks/mutations/useMutateCancelJob"
import useMutateUpdateJobApplies from "hooks/mutations/useMutateUpdateJobApplies"
import { StatusJobApply } from "types/api/job"
import { useWriteContract } from "./useWriteContract"
import { toHex } from "viem"
import { TFunctionPromise } from "types/common"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { showAlertState } from "store/alertAtom"

type Props = {
  idJob: string
  idJobApplies: string
  status: StatusJobApply
  rejectedNote?: string
  callback?: TFunctionPromise
}

const useCloseJobSmartContract = () => {
  const { mutate: mutateUpdateJobApplies, errors: errorsUpdateJobApplies } =
    useMutateUpdateJobApplies()
  console.log("errorsUpdateJobApplies:", errorsUpdateJobApplies)
  const { mutate: mutateCancelJob, errors: errorsCancelJob } = useMutateCancelJob()
  console.log("errorsCancelJob:", errorsCancelJob)
  const { write } = useWriteContract({})
  const [loading, setLoading] = useState(false)
  const showAlert = useSetRecoilState(showAlertState)

  const mutate = async ({ idJob, idJobApplies, status, rejectedNote }: Props) => {
    setLoading(true)
    await mutateUpdateJobApplies(idJobApplies, {
      job_apply: {
        status,
        rejected_note: rejectedNote,
      },
    })
    if (errorsUpdateJobApplies) return
    await mutateCancelJob(idJob)
    if (errorsCancelJob) return
    // callback?.()
    console.log(123)
    write(
      {
        functionName: "closeJob",
        args: [toHex(idJob, { size: 32 })],
      },
      {
        onSuccess: () => {
          write(
            {
              functionName: "completeJob",
              args: [toHex(idJob, { size: 32 })],
            },
            {
              onSuccess: () => {
                showAlert({ message: "The transaction is successful." })
              },
              onError: () => {
                showAlert({ message: "The transaction is failed.", type: "error" })
              },
              onSettled: () => {
                setLoading(false)
              },
            }
          )
        },
        onError: () => {
          setLoading(false)
          showAlert({ message: "The transaction is failed.", type: "error" })
        },
      }
    )
    setLoading(false)
  }

  return { mutate, loading }
}

export default useCloseJobSmartContract
