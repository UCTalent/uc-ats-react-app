import { Outlet } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import TheAppHeader from "components/sections/TheAppHeader"
import TheNavigateAsideBar from "components/sections/TheNavigateAsideBar"

const AsideNavigateLayout = () => {
  return (
    <Stack sx={{ height: "100vh", overflowY: "hidden" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
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
      </Box>
    </Stack>
  )
}

export default AsideNavigateLayout
