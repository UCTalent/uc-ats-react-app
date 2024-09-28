import { Outlet } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import AppContainer from "components/common/AppContainer"
import TheAppHeader from "components/sections/TheAppHeader"
import TheNavigateAsideBar from "components/sections/TheNavigateAsideBar"

const AsideNavigateLayout = () => {
  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll" }}>
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
            <Stack sx={{ flexGrow: 1 }}>
              <Outlet />
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default AsideNavigateLayout
