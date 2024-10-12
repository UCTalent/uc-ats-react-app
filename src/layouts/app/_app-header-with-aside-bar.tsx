import { Suspense, useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import PrivateRoute from "components/common/PrivateRoute"
import AppHeader from "components/sections/AppHeader"
import NavigateAsideBar from "components/sections/NavigateAsideBar"
import NavigateAsideBarCollapseExpand from "components/sections/NavigateAsideBarCollapseExpand"
import LoadingSuspense from "components/common/LoadingSuspense"
import { APP_HEADER_HEIGHT } from "constants/STYLE"

const AppHeaderWithAsideBarLayout = () => {
  const { pathname } = useLocation()

  const isHomePath = useMemo(() => pathname === "/", [pathname])

  return (
    <PrivateRoute>
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
            {isHomePath ? <NavigateAsideBar /> : <NavigateAsideBarCollapseExpand />}
            <Stack
              sx={{
                flexGrow: 1,
                overflow: "hidden",
                maxHeight: `calc(100vh - ${APP_HEADER_HEIGHT}px - 1px)`,
              }}
            >
              <Suspense fallback={<LoadingSuspense sx={{ width: "100%", height: "100%" }} />}>
                <Outlet />
              </Suspense>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </PrivateRoute>
  )
}

export default AppHeaderWithAsideBarLayout
