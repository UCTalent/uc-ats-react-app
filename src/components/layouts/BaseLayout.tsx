import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
// import { useTheme } from "@mui/material"
import { AppContainer } from "components/common"
import { TheAppHeader } from "components/sections"
import { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
}

const BaseLayout: React.FC<TypeProps> = ({ children }) => {
  // const { palette } = useTheme()

  return (
    <Stack sx={{ height: "100vh", overflow: "auto" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          {/* <Stack
            direction="row"
            sx={{
              minHeight: "100%",
              borderWidth: "0 1px",
              borderStyle: "solid",
              borderColor: palette.border.outlined,
            }}
          > */}
          {children}
          {/* <TheNavigateAsideBar />
            <Stack sx={{ flexGrow: 1 }}ś
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
            </Stack> */}
          {/* </Stack> */}
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default BaseLayout
