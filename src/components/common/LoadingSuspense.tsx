import { Box, CircularProgress, SxProps } from "@mui/material"
import { FC } from "react"

interface IProps {
  sx?: SxProps
}

const LoadingSuspense: FC<IProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingSuspense
