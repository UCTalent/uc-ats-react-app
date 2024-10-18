import useMutateCancelJob from "hooks/mutations/useMutateCancelJob"
import useMutateUpdateJobApplies from "hooks/mutations/useMutateUpdateJobApplies"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { showAlertState } from "store/alertAtom"
import { TFunction } from "types/common"
import { toHex } from "viem"
import { useWriteContract } from "./useWriteContract"

type Props = {
  closeJobStatus: "success" | "failed"
  idJob: string
  idJobApplies?: string
  rejectedNote?: string
  isCreatedBySmartContract?: boolean
  callback?: TFunction
}

const useCloseJobSmartContract = () => {
  const { mutate: mutateUpdateJobApplies, errors: errorsUpdateJobApplies } =
    useMutateUpdateJobApplies()
  const { mutate: mutateCancelJob, errors: errorsCancelJob } = useMutateCancelJob()
  const { write } = useWriteContract({})
  const [loading, setLoading] = useState(false)
  const showAlert = useSetRecoilState(showAlertState)

  const mutate = async ({
    idJob,
    idJobApplies,
    // rejectedNote,
    closeJobStatus,
    isCreatedBySmartContract,
    callback,
  }: Props) => {
    setLoading(true)
    if (closeJobStatus === "success") {
      await mutateUpdateJobApplies(idJobApplies, {
        job_apply: {
          status: "hired",
        },
      })
    }
    if (errorsUpdateJobApplies) return
    await mutateCancelJob(idJob)
    if (errorsCancelJob) return
    if (callback && typeof callback === "function") callback()
    if (isCreatedBySmartContract) {
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
    }
    setLoading(false)
  }

  return { mutate, loading }
}

export default useCloseJobSmartContract
