import { useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import TheAppHeader from "components/sections/TheAppHeader"
import TheNavigateAsideBar from "components/sections/TheNavigateAsideBar"
import TheNavigateAsideCollapseBar from "components/sections/TheNavigateAsideCollapseBar"
import { APP_HEADER_HEIGHT } from "constants/STYLE"

const HeaderWithAsideBarLayout = () => {
  const { pathname } = useLocation()

  const isJobDetailPath = useMemo(() => {
    const regex = /^\/jobs\/\d+\//
    return regex.test(pathname)
  }, [pathname])

  return (
    <Stack sx={{ height: "100vh", overflowY: "hidden" }}>
      <TheAppHeader />
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
          {isJobDetailPath ? <TheNavigateAsideCollapseBar /> : <TheNavigateAsideBar />}
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

export default HeaderWithAsideBarLayout
