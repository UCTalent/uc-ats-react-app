import { type SxProps } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Modal from "@mui/material/Modal"
import IconClose from "assets/icons/close.svg"
import { type ReactNode } from "react"

interface IProps {
  children: ReactNode
  hasIconClose?: boolean
  wrapperSx?: SxProps
  open?: boolean
  onClose?: () => void
}

const ModalCommon: React.FC<IProps> = ({ children, wrapperSx, open, onClose, hasIconClose }) => {
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
          maxHeight: "90vh",
          borderRadius: "16px",
          border: "1px solid",
          borderColor: "border.outlined",
          pb: "16px",
          bgcolor: "#fff",
          "&:focus": {
            outline: "none",
          },
          ...wrapperSx,
        }}
      >
        {children}
        {hasIconClose && (
          <IconButton sx={{ position: "absolute", top: "12px", right: "16px" }} onClick={onClose}>
            <img src={IconClose} alt="close" width={32} height={32} />
          </IconButton>
        )}
      </Box>
    </Modal>
  )
}

export default ModalCommon
