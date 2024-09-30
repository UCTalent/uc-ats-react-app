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
          <Stack flexDirection="row" sx={{ height: "100%" }}>
            <TheNavigateAsideCollapseBar />
            <Stack sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}>
              <TitleOverview sx={{ mt: "12px", mb: "20px", px: "20px" }} />
              <Stack sx={{ flexGrow: 1 }}>
                <Stack
                  flexDirection="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: 1,
                    borderColor: "border.outlined",
                    mx: "20px",
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
