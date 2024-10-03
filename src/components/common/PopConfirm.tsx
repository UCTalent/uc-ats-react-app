import { useCallback } from "react"
import Stack from "@mui/material/Stack"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import useConfirmAtom from "hooks/atoms/useConfirmAtom"
import ButtonContained from "./buttons/ButtonContained"
import ButtonOutlined from "./buttons/ButtonOutlined"
import TypographyHtml from "./TypographyHtml"

const PopConfirm = () => {
  const { confirm, clearConfirm, doHandler } = useConfirmAtom()
  const { isActive, title, content, render, confirmText, cancelText, onCancel } = confirm

  const handleConfirm = useCallback(async () => {
    await doHandler()
    clearConfirm()
  }, [clearConfirm, doHandler])

  const handleCancel = useCallback(() => {
    onCancel()
    clearConfirm()
  }, [clearConfirm, onCancel])

  if (render) {
    console.log(render())
  }

  return (
    <Modal open={isActive} onClose={handleCancel}>
      <Stack
        sx={{
          alignItems: "center",
          width: 340,
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
        <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: "8px" }}>{title}</Typography>
        {content && (
          <Stack flexDirection="row" sx={{ textAlign: "center", fontSize: "14px" }}>
            {content}
          </Stack>
        )}
        {render && <TypographyHtml>{render()}</TypographyHtml>}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="end"
          gap="12px"
          sx={{ mt: "28px" }}
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
