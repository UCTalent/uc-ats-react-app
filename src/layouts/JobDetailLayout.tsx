import { useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import TheAppHeader from "components/sections/TheAppHeader"
import AppContainer from "components/common/AppContainer"
import TitleOverview from "components/sections/job-detail/TitleOverview"
import TabMenuHorizontal from "components/sections/job-detail/TabMenuHorizontal"
import CandidateBoardToolBar from "components/sections/job-detail/CandidateBoardToolBar"

const JobDetailLayout = () => {
  const { pathname } = useLocation()

  const isCandidatePage = useMemo(() => pathname.includes("/candidates"), [pathname])

  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack sx={{ height: "100%", gap: "20px" }}>
            <TitleOverview />
            <Stack sx={{ flexGrow: 1 }}>
              <Stack
                flexDirection="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: 1,
                  borderColor: "border.outlined",
                }}
              >
                <TabMenuHorizontal />
                {isCandidatePage && <CandidateBoardToolBar />}
              </Stack>
              <Outlet />
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default JobDetailLayout
