import ErrorIcon from "@mui/icons-material/Error"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { AlertTitle, Box, Alert as MuiAlert, Snackbar, Typography, useTheme } from "@mui/material"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { alertAtom } from "store/alertAtom"
import { AlertSuccess } from "./icons/AlertSuccess"

export const Alert = () => {
  const theme = useTheme()
  const alertState = useRecoilValue(alertAtom)
  const resetAlert = useResetRecoilState(alertAtom)

  let Icon: React.ReactNode = null
  switch (alertState?.type) {
    case "success":
      Icon = <AlertSuccess />
      break
    case "error":
      Icon = <ErrorIcon />
      break
    default:
      Icon = <InfoOutlinedIcon />
      break
  }

  const handleClose = () => {
    resetAlert()
  }

  return (
    <Snackbar
      open={alertState.open}
      autoHideDuration={alertState.duration}
      onClose={handleClose}
      anchorOrigin={alertState.anchorOrigin}
      sx={{ height: "auto !important" }}
    >
      <MuiAlert
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "14px 16px",
          borderRadius: "8px",
          minWidth: "280px",
          "& .MuiAlert-message": {
            padding: 0,
          },
          "& .MuiSvgIcon-root": {
            fill: "#F8F7FF",
          },
          backgroundColor: `${alertState.type}.main`,
        }}
        icon={
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              PADDING: "8px",
              backgroundColor: "#F8F7FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& path": {
                fill: theme.palette[alertState.type ?? "success"].main,
              },
            }}
          >
            {Icon}
          </Box>
        }
        onClose={handleClose}
        severity={alertState.type}
      >
        <AlertTitle
          sx={{
            color: "#F8F7FF",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: 1.5,
            marginBottom: "4px",
            textTransform: "uppercase",
          }}
        >
          {alertState.title}
        </AlertTitle>
        <Typography sx={{ color: "#F8F7FF" }} variant="body2">
          {alertState.message}
        </Typography>
      </MuiAlert>
    </Snackbar>
  )
}
