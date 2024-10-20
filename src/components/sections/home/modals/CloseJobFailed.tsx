import { Stack, Typography } from "@mui/material"
import ButtonContained from "components/common/buttons/ButtonContained"
import CheckboxGroupField from "components/common/form-fields/CheckboxGroupField"
import TextField from "components/common/form-fields/TextField"
import ModalCommon from "components/common/ModalCommon"
import { MOCK_REASON_CLOSE_JOB_FAILED } from "constants/REASON_CLOSE_JOB_FAILED"
import useCloseJobSmartContract from "hooks/abi/useCloseJobSmartContract"
import { useForm } from "react-hook-form"
import { TFunction } from "types/common"
import { Web3metaType } from "types/smart-contract"
import { checkJobCreatedBySmartContract } from "utils/checkJobCreatedBySmartContract"

type Props = {
  jobId: string
  talentAddress: string
  referrerAddress: string
  applyTimestamp: number
  referraTimestamp: number
  web3meta?: Web3metaType
  closeModal: TFunction
  refetchList: TFunction
}

type FormJobFailed = {
  reasonCloseJob: Array<string>
  otherReason: string
}

const CloseJobFailed = ({
  jobId,
  closeModal,
  refetchList,
  talentAddress,
  referrerAddress,
  applyTimestamp,
  referraTimestamp,
  web3meta,
}: Props) => {
  const isCreatedBySmartContract = checkJobCreatedBySmartContract(web3meta.events)
  const { mutate, loading } = useCloseJobSmartContract({ isCreatedBySmartContract })
  const { control, handleSubmit, reset } = useForm<FormJobFailed>({
    defaultValues: {
      reasonCloseJob: [],
      otherReason: "",
    },
  })

  const handleCloseModal = () => {
    closeModal()
    reset()
  }

  const handleSubmitForm = (value: FormJobFailed) => {
    if (loading) return
    // TODO: Call mutation to close job with failed reason
    console.log("handleSubmitForm called", value)
    mutate({
      closeJobStatus: "failed",
      idJob: jobId,
      talentAddress,
      referrerAddress,
      applyTimestamp,
      referraTimestamp,
      callback: () => {
        handleCloseModal()
        refetchList()
      },
    })
  }

  return (
    <ModalCommon open={true} onClose={handleCloseModal}>
      <Stack sx={{ p: "24px", gap: "16px", maxWidth: "500px" }}>
        <Typography variant="h5" color="error.main" textAlign="center">
          Hnm...
        </Typography>
        <Typography textAlign="center">
          Let us know the reasons for improving the quality
        </Typography>
        <Stack gap="12px">
          <CheckboxGroupField
            control={control}
            options={MOCK_REASON_CLOSE_JOB_FAILED}
            name="reasonCloseJob"
          />
          <Stack gap="4px">
            <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>Others</Typography>
            <TextField control={control} name="otherReason" multiline minRows={4} />
          </Stack>
        </Stack>
        <Stack flexDirection="row" gap="16px">
          <ButtonContained
            sx={{
              backgroundColor: "text.disabled",
              "&:hover": { backgroundColor: "text.disabled" },
              flex: 1,
            }}
            onClick={handleCloseModal}
          >
            Cancel
          </ButtonContained>
          <ButtonContained
            disabled={loading}
            sx={{ flex: 1 }}
            onClick={handleSubmit(handleSubmitForm)}
          >
            Confirm
          </ButtonContained>
        </Stack>
      </Stack>
    </ModalCommon>
  )
}

export default CloseJobFailed
