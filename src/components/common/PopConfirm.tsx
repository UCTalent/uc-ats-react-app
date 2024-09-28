import { useCallback } from "react"
import Stack from "@mui/material/Stack"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import useConfirmAtom from "hooks/atoms/useConfirmAtom"
import ButtonContained from "./buttons/ButtonContained"
import ButtonOutlined from "./buttons/ButtonOutlined"

const PopConfirm = () => {
  const { confirm, clearConfirm, doHandler } = useConfirmAtom()
  const { isActive, title, content, confirmText, cancelText, onCancel } = confirm

  const handleConfirm = useCallback(async () => {
    await doHandler()
    clearConfirm()
  }, [clearConfirm, doHandler])

  const handleCancel = useCallback(() => {
    onCancel()
    clearConfirm()
  }, [clearConfirm, onCancel])

  return (
    <Modal open={isActive} onClose={clearConfirm}>
      <Stack
        sx={{
          width: 400,
          py: 3,
          px: 4,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          "&:focus": {
            outline: "none",
          },
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}>{title}</Typography>
        {content}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="end"
          gap="4px"
          sx={{ mt: "24px" }}
        >
          <ButtonOutlined sx={{ "&:hover": {} }} onClick={handleCancel}>
            {cancelText}
          </ButtonOutlined>
          <ButtonContained onClick={handleConfirm}>{confirmText}</ButtonContained>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default PopConfirm
