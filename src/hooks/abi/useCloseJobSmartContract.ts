import useMutateCancelJob from "hooks/mutations/useMutateCancelJob"
import useMutateUpdateJobApplies from "hooks/mutations/useMutateUpdateJobApplies"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { showAlertState } from "store/alertAtom"
import { TFunction } from "types/common"
import { toHex } from "viem"
import { useWriteContract } from "./useWriteContract"
import useCreateSmartContractSignature from "hooks/mutations/useCreateSmartContractSignature"
import useGetAddressAccount from "./useGetAddressAccount"
import { REFERRAL_PERCENTAGE } from "constants/COMMON"

type Props = {
  isCreatedBySmartContract?: boolean
}

type PropsFunction = {
  closeJobStatus: "success" | "failed"
  idJob: string
  idJobApplies?: string
  rejectedNote?: string
  talentAddress?: string
  referrerAddress?: string
  applyTimestamp?: number
  referraTimestamp?: number
  callback?: TFunction
}

const useCloseJobSmartContract = ({ isCreatedBySmartContract }: Props) => {
  const { mutate: mutateUpdateJobApplies, errors: errorsUpdateJobApplies } =
    useMutateUpdateJobApplies()
  const { mutate: mutateCreateSmartContractSignature } = useCreateSmartContractSignature()
  const { mutate: mutateCancelJob, errors: errorsCancelJob } = useMutateCancelJob()
  const { write } = useWriteContract({})
  const [loading, setLoading] = useState(false)
  const showAlert = useSetRecoilState(showAlertState)
  const { getAddress } = useGetAddressAccount(isCreatedBySmartContract)

  const mutate = async ({
    idJob,
    idJobApplies,
    // rejectedNote,
    closeJobStatus,
    talentAddress,
    referrerAddress,
    applyTimestamp,
    referraTimestamp,
    callback,
  }: PropsFunction) => {
    setLoading(true)
    const closeJobWeb2 = async () => {
      if (closeJobStatus === "success") {
        await mutateUpdateJobApplies(idJobApplies, {
          job_apply: {
            status: "hired",
          },
        })
      }
      if (errorsUpdateJobApplies) return
      await mutateCancelJob(
        idJob,
        closeJobStatus === "failed"
          ? {
              job: {
                close_type: "fail",
                // TODO: replace reason
                job_closure_reasons_attributes: {},
              },
            }
          : {
              job: {
                close_type: "success",
              },
            }
      )
      if (errorsCancelJob) return
      if (callback && typeof callback === "function") callback()
    }
    if (isCreatedBySmartContract) {
      getAddress({
        onSuccess: async (addressSender) => {
          const JobId = toHex(idJob, { size: 32 })
          const request = {
            sender: addressSender,
            jobId: JobId,
            talentAddress,
            referrerAddress,
            referralPercentage: REFERRAL_PERCENTAGE,
            referraTimestamp,
            applyTimestamp,
          }
          const dataResponse = await mutateCreateSmartContractSignature(request)
          const signature = dataResponse.data.body.signature
          if (!signature) {
            showAlert({ message: "The transaction is failed.", type: "error" })
            return
          }
          write(
            {
              functionName: "closeJob",
              args: [
                JobId,
                closeJobStatus === "success",
                request.talentAddress,
                request.referrerAddress,
                REFERRAL_PERCENTAGE,
                request.applyTimestamp,
                request.referraTimestamp,
                signature,
              ],
            },
            {
              onSuccess: async () => {
                showAlert({ message: "The transaction is successful." })
                await closeJobWeb2()
              },
              onError: (error) => {
                console.log("error:", error, request)
                showAlert({ message: "The transaction is failed.", type: "error" })
              },
              onSettled: () => {
                setLoading(false)
              },
            }
          )
        },
      })
    } else {
      await closeJobWeb2()
    }
    setLoading(false)
  }

  return { mutate, loading }
}

export default useCloseJobSmartContract
