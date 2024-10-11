import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import { Stack, Typography } from "@mui/material"
import ButtonContained from "components/common/buttons/ButtonContained"
import ButtonOutlined from "components/common/buttons/ButtonOutlined"
import ModalCommon from "components/common/ModalCommon"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
  jobId: string
}

const CloseJobSuccess = ({ jobId }: Props) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleClickConfirm = () => {
    navigate(PAGE_MAP.JOB_CANDIDATE(jobId.toString()) + "?close-job=success")
  }

  return (
    <>
      <ButtonOutlined
        customColor="success.main"
        sx={{
          color: "text.primary",
          "&:hover svg": {
            fill: "white",
          },
        }}
        startIcon={<DoneRoundedIcon color="success" />}
        onClick={() => setOpen(true)}
      >
        Success
      </ButtonOutlined>
      {open && (
        <ModalCommon open={open} onClose={handleCloseModal}>
          <Stack sx={{ p: "24px", gap: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="success.main">
              Good job!
            </Typography>
            <Typography sx={{ px: "40px", pb: "16px" }}>
              It seems that you have successfully selected <br></br> your ideal candidate. Let us
              know who they are!
            </Typography>
            <ButtonContained onClick={handleClickConfirm}>I got it</ButtonContained>
          </Stack>
        </ModalCommon>
      )}
    </>
  )
}
export default CloseJobSuccess
