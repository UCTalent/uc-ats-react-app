import { Box, CircularProgress } from "@mui/material"

export const LoadingSuspense = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  )
}
