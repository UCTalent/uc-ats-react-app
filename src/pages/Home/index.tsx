import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"
import { WrappedSEO, AppContainer } from "components/common"
import { TheAppHeader, TheNavigateAsideBar } from "components/sections"
import { TopBarWithTitle, TheJobsList } from "components/sections/home"

const TheHomePage = () => {
  const { palette } = useTheme()

  return (
    <>
      <WrappedSEO title="Home page" />
      <Stack sx={{ height: "100vh", overflow: "auto" }}>
        <TheAppHeader />
        <Box sx={{ flexGrow: 1 }}>
          <AppContainer sx={{ minHeight: "100%" }}>
            <Stack
              direction="row"
              sx={{
                minHeight: "100%",
                borderWidth: "0 1px",
                borderStyle: "solid",
                borderColor: palette.border.outlined,
              }}
            >
              <TheNavigateAsideBar />
              <Stack sx={{ flexGrow: 1 }}>
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
              </Stack>
            </Stack>
          </AppContainer>
        </Box>
      </Stack>
    </>
  )
}

export default TheHomePage
