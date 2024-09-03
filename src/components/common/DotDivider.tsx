import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"

const DotDivider = () => {
  const { palette } = useTheme()
  return (
    <Box
      sx={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        bgcolor: palette.text.secondary,
      }}
    ></Box>
  )
}

export default DotDivider
