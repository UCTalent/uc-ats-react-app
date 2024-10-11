import { useParams } from "react-router-dom"
import Stack from "@mui/material/Stack"
import AppContainer from "components/common/AppContainer"
import JobOverviewBox from "components/sections/job-detail/JobOverviewBox"
import JobDetailContent from "components/sections/job-detail/JobDetailContent"
import useJobInformationQuery from "hooks/queries/useJobInformationQuery"

const TheJobDetailPage = () => {
  const { jobId } = useParams()
  const { data } = useJobInformationQuery(jobId)

  return (
    <Stack sx={{ px: "20px", overflow: "auto" }}>
      <AppContainer width={864} sx={{ margin: "0" }}>
        <Stack sx={{ flexGrow: 1, overflow: "auto", gap: "20px", py: "16px" }}>
          <JobOverviewBox data={data?.business.job} />
          <JobDetailContent data={data?.business.job} />
        </Stack>
      </AppContainer>
    </Stack>
  )
}

export default TheJobDetailPage
