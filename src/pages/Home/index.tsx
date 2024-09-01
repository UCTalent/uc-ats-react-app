import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"
import { WrappedSEO, AppContainer } from "components/common"
import { TheAppHeader, TheNavigateAsideBar } from "components/sections"

const TheHomePage = () => {
  const { palette } = useTheme()

  return (
    <>
      <WrappedSEO title="Home page" />
      <Stack sx={{ height: "100vh", overflow: "hidden" }}>
        <TheAppHeader />
        <Box sx={{ flexGrow: 1 }}>
          <AppContainer>
            <Stack
              direction="row"
              sx={{
                height: "100%",
                borderWidth: "0 1px",
                borderStyle: "solid",
                borderColor: palette.border.outlined,
              }}
            >
              <TheNavigateAsideBar />
              <Stack sx={{ flexGrow: 1 }}>
                <Box sx={{ height: 40, position: "sticky", top: 0, bgcolor: "#F8F7FF" }}>3</Box>
                <Box sx={{ flexGrow: 1 }}>2</Box>
                <Box sx={{ height: 40, position: "sticky", bottom: 0, bgcolor: "#F8F7FF" }}>3</Box>
              </Stack>
            </Stack>
          </AppContainer>
        </Box>
      </Stack>
    </>
  )
}

export default TheHomePage
