import { useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import AppHeader from "components/sections/AppHeader"
import NavigateAsideBar from "components/sections/NavigateAsideBar"
import NavigateAsideBarCollapseExpand from "components/sections/NavigateAsideBarCollapseExpand"
import { APP_HEADER_HEIGHT } from "constants/STYLE"

const AppHeaderWithAsideBarLayout = () => {
  const { pathname } = useLocation()

  const isJobDetailPath = useMemo(() => {
    const regex = /^\/jobs\/\d+\//
    return regex.test(pathname)
  }, [pathname])

  return (
    <Stack sx={{ height: "100vh", overflowY: "hidden" }}>
      <AppHeader />
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Stack
          direction="row"
          sx={{
            minHeight: "100%",
            borderWidth: "0 1px",
            borderStyle: "solid",
            borderColor: "border.outlined",
          }}
        >
          {isJobDetailPath ? <NavigateAsideBarCollapseExpand /> : <NavigateAsideBar />}
          <Stack
            sx={{
              flexGrow: 1,
              overflow: "hidden",
              maxHeight: `calc(100vh - ${APP_HEADER_HEIGHT}px - 1px)`,
            }}
          >
            <Outlet />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default AppHeaderWithAsideBarLayout
