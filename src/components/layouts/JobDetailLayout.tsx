import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
// import { useTheme } from "@mui/material"
import { AppContainer, Breadcrumbs } from "components/common"
import { TheAppHeader } from "components/sections"
import { type ReactNode } from "react"
import { TitleOverview, TabMenuHorizontal } from "components/sections/job-detail"

interface TypeProps {
  children: ReactNode
}

const JobDetailLayout: React.FC<TypeProps> = ({ children }) => {
  // const { palette } = useTheme()

  return (
    <Stack sx={{ height: "100vh", overflow: "auto" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack sx={{ height: "100%", gap: "10px" }}>
            <Breadcrumbs />
            <TitleOverview />
            <Stack sx={{ flexGrow: 1, pt: "16px", pl: "28px" }}>
              <TabMenuHorizontal />
              {children}
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default JobDetailLayout
