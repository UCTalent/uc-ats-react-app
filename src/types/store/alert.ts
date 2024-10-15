import { SnackbarOrigin } from "@mui/material"

export interface IAlertState {
  open?: boolean
  type?: "success" | "error"
  title?: string
  message: string
  duration?: number
  anchorOrigin?: SnackbarOrigin
}
