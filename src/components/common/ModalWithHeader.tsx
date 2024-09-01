import Modal from "@mui/material/Modal"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { useTheme, type SxProps } from "@mui/material"
import { IconClose } from "assets/icons"
import { type ReactNode } from "react"

interface IProps {
  children: ReactNode
  title: string
  description: string
  wrapperSx?: SxProps
  open?: boolean
  onClose?: () => void
}

const ModalWithHeader: React.FC<IProps> = ({
  children,
  title,
  description,
  wrapperSx,
  open,
  onClose,
}) => {
  const { palette } = useTheme()
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "16px",
          border: `1px solid ${palette.border.outlined}`,
          pb: "16px",
          bgcolor: "white",
          "&:focus": {
            outline: "none",
          },
          overflow: "hidden",
          ...wrapperSx,
        }}
      >
        <Stack
          sx={{ px: "24px", py: "16px", pr: "56px", mb: "16px", bgcolor: "rgba(18, 22, 25, 0.02)" }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>{title}</Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {description}
          </Typography>
        </Stack>
        {children}
        <IconButton sx={{ position: "absolute", top: "12px", right: "16px" }} onClick={onClose}>
          <img src={IconClose} alt="close" width={32} height={32} />
        </IconButton>
      </Box>
    </Modal>
  )
}

export default ModalWithHeader
