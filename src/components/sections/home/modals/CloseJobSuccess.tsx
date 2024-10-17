import { Stack, Typography } from "@mui/material"
import ButtonContained from "components/common/buttons/ButtonContained"
import ModalCommon from "components/common/ModalCommon"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { useNavigate } from "react-router-dom"
import { TFunction } from "types/common"

type Props = {
  jobId: string
  closeModal: TFunction
}

const CloseJobSuccess = ({ jobId, closeModal }: Props) => {
  const navigate = useNavigate()

  const handleClickConfirm = () => {
    navigate(PAGE_MAP.JOB_CANDIDATE(jobId.toString()) + "?close-job=success")
  }

  return (
    <ModalCommon open={true} onClose={closeModal}>
      <Stack sx={{ p: "24px", gap: "16px", textAlign: "center" }}>
        <Typography variant="h5" color="success.main">
          Good job!
        </Typography>
        <Typography sx={{ px: "40px", pb: "16px" }}>
          It seems that you have successfully selected <br></br> your ideal candidate. Let us know
          who they are!
        </Typography>
        <ButtonContained onClick={handleClickConfirm}>I got it</ButtonContained>
      </Stack>
    </ModalCommon>
  )
}
export default CloseJobSuccess
