import { Outlet } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import AppContainer from "components/common/AppContainer"
import TheAppHeader from "components/sections/AppHeader"

const BaseLayout = () => {
  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Outlet />
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default BaseLayout
