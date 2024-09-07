import Box from "@mui/material/Box"
import { forwardRef, type ReactNode } from "react"
import { APP_CONTAINER_WIDTH } from "constants/STYLE"
import { type SxProps } from "@mui/material"

interface IProps {
  children: ReactNode
  width?: number
  sx?: SxProps
}

const AppContainer: React.FC<IProps> = forwardRef(
  ({ children, width = APP_CONTAINER_WIDTH, sx }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          height: "100%",
          width: "100%",
          maxWidth: width,
          margin: "0 auto",
          ...sx,
        }}
      >
        {children}
      </Box>
    )
  }
)

export default AppContainer
