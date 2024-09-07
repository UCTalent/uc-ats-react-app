import Stack from "@mui/material/Stack"
import { AppContainer } from "components/common"
import { JobOverviewBox, SkillNTechnologies } from "components/sections/job-detail"

const TheJobDetailPage = () => {
  return (
    <Stack sx={{ py: "16px" }}>
      <AppContainer width={864} sx={{ margin: "0" }}>
        <Stack sx={{ flexGrow: 1, overflow: "auto", gap: "10px" }}>
          <JobOverviewBox />
          <SkillNTechnologies />
        </Stack>
      </AppContainer>
    </Stack>
  )
}

export default TheJobDetailPage
