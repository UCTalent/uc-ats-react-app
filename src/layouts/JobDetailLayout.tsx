import { Outlet } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import TheAppHeader from "components/sections/TheAppHeader"
import AppContainer from "components/common/AppContainer"
import TitleOverview from "components/sections/job-detail/TitleOverview"
import TabMenuHorizontal from "components/sections/job-detail/TabMenuHorizontal"
import TheNavigateAsideCollapseBar from "components/sections/TheNavigateAsideCollapseBar"

const JobDetailLayout = () => {
  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack flexDirection="row" gap="20px" sx={{ height: "100%" }}>
            <TheNavigateAsideCollapseBar />
            <Stack sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}>
              <TitleOverview sx={{ mt: "12px", mb: "20px" }} />
              <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
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
                </Stack>
                <Outlet />
              </Stack>
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default JobDetailLayout
