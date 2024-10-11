import useMutateCancelJob from "hooks/mutations/useMutateCancelJob"
import useMutateUpdateJobApplies from "hooks/mutations/useMutateUpdateJobApplies"
import { StatusJobApply } from "types/api/job"
import { useWriteContract } from "./useWriteContract"
import { toHex } from "viem"

type Props = {
  idJob: string
  idJobApplies: string
  status: StatusJobApply
  rejectedNote?: string
}

const useCloseJobSmartContract = () => {
  const { mutate: mutateUpdateJobApplies } = useMutateUpdateJobApplies()
  const { mutate: mutateCancelJob } = useMutateCancelJob()
  const { write } = useWriteContract({})

  const mutate = async ({ idJob, idJobApplies, status, rejectedNote }: Props) => {
    await mutateUpdateJobApplies(idJobApplies, {
      job_apply: {
        status,
        rejected_note: rejectedNote,
      },
    })
    await mutateCancelJob(idJob)
    write(
      {
        functionName: "closeJob",
        args: [toHex(idJob, { size: 32 })],
      },
      {
        onSuccess: () => {
          write({
            functionName: "completedJob",
            args: [toHex(idJob, { size: 32 })],
          })
        },
      }
    )
  }

  return { mutate }
}

export default useCloseJobSmartContract
