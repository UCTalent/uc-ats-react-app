import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import AppContainer from "components/common/AppContainer"
import TheAppHeader from "components/sections/TheAppHeader"
import TheNavigateAsideBar from "components/sections/TheNavigateAsideBar"
import useScrollToTop from "hooks/useScrollToTop"
import { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
}

const AsideNavigateLayout: React.FC<TypeProps> = ({ children }) => {
  const { containerRef } = useScrollToTop()

  return (
    <Stack ref={containerRef} sx={{ height: "100vh", overflowY: "scroll" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack
            direction="row"
            sx={{
              minHeight: "100%",
              borderWidth: "0 1px",
              borderStyle: "solid",
              borderColor: "border.outlined",
            }}
          >
            <TheNavigateAsideBar />
            <Stack sx={{ flexGrow: 1 }}>{children}</Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default AsideNavigateLayout
