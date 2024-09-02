import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"
import { TopBarWithTitle, TheJobsList } from "components/sections/home"

const TheHomePage = () => {
  const { palette } = useTheme()

  return (
    <>
      <TopBarWithTitle />
      <TheJobsList />
      <Box
        sx={{
          minHeight: 40,
          px: "28px",
          position: "sticky",
          bottom: 0,
          bgcolor: palette.background.accent,
        }}
      ></Box>
    </>
  )
}

export default TheHomePage
