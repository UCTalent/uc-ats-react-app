import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { Stack, Typography } from "@mui/material"
import ButtonContained from "components/common/buttons/ButtonContained"
import ButtonOutlined from "components/common/buttons/ButtonOutlined"
import CheckboxGroupField from "components/common/form-fields/CheckboxGroupField"
import TextField from "components/common/form-fields/TextField"
import ModalCommon from "components/common/ModalCommon"
import { MOCK_REASON_CLOSE_JOB_FAILED } from "constants/REASON_CLOSE_JOB_FAILED"
import { useState } from "react"
import { useForm } from "react-hook-form"

type Props = {
  jobId: string
}

const CloseJobFailed = ({ jobId }: Props) => {
  console.log("jobId:", jobId)
  const [open, setOpen] = useState(false)
  const { control } = useForm()

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  return (
    <>
      <ButtonOutlined
        customColor="error.main"
        sx={{
          color: "text.primary",
          "&:hover svg": {
            fill: "white",
          },
        }}
        startIcon={<CloseRoundedIcon color="error" />}
        onClick={handleOpenModal}
      >
        Failed
      </ButtonOutlined>
      {open && (
        <ModalCommon open={open} onClose={handleCloseModal}>
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
              >
                Cancel
              </ButtonContained>
              <ButtonContained sx={{ flex: 1 }}>Confirm</ButtonContained>
            </Stack>
          </Stack>
        </ModalCommon>
      )}
    </>
  )
}

export default CloseJobFailed
