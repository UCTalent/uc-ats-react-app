import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { AppContainer, Breadcrumbs } from "components/common"
import { TheAppHeader } from "components/sections"
import { type ReactNode } from "react"
import {
  TitleOverview,
  TabMenuHorizontal,
  CandidateBoardToolBar,
} from "components/sections/job-detail"

interface TypeProps {
  children: ReactNode
}

const JobDetailLayout: React.FC<TypeProps> = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh", overflow: "scroll" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack sx={{ height: "100%", gap: "10px" }}>
            <Breadcrumbs />
            <TitleOverview />
            <Stack sx={{ flexGrow: 1, pt: "16px" }}>
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
                <CandidateBoardToolBar />
              </Stack>
              {children}
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default JobDetailLayout
