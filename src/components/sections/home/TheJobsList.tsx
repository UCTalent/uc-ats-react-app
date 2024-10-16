import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import JobCard from "components/common/JobCard"
import NumberWithLabelVerticalTag from "components/common/tags/NumberWithLabelVerticalTag"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { JobsListType } from "hooks/queries/useJobsQuery"
import CloseJobSuccess from "./modals/CloseJobSuccess"
import CloseJobFailed from "./modals/CloseJobFailed"
import EmptyData from "components/common/EmptyData"

interface IProps {
  data: JobsListType
}

const TheJobsList: FC<IProps> = ({ data }) => {
  const navigate = useNavigate()

  const jobs = data?.business.jobs.jobs

  return (
    <Stack sx={{ flexGrow: 1, pt: "12px" }}>
      {jobs && Array.isArray(jobs) && jobs.length === 0 && <EmptyData sx={{ height: "100%" }} />}
      {jobs &&
        Array.isArray(jobs) &&
        jobs.length > 0 &&
        jobs.map((job, index) => (
          <Stack
            key={job.id}
            flexDirection="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mx: "28px",
              py: "24px",
              borderBottom: index !== jobs.length - 1 && "1px solid",
              borderColor: "border.outlined",
            }}
          >
            <JobCard
              jobTitle={job.title}
              organizationName={job.organization?.name}
              organizationLogo={job.organization?.logoUrl}
              city={job.locationValue}
              country={job.country?.codeIso3}
              jobType={job.jobType}
              onClickTitle={() => navigate(PAGE_MAP.JOB_CANDIDATE(job.id.toString()))}
            />
            <Stack flexDirection="row" gap="108px" sx={{ px: "24px" }}>
              <Stack flexDirection="row" gap="10px">
                {/* <NumberWithLabelVerticalTag label="Viewed" value={100} /> */}
                <NumberWithLabelVerticalTag label="Applied" value={job.appliedNum} />
                <NumberWithLabelVerticalTag label="Hired" value={job.hiredNum} />
                <NumberWithLabelVerticalTag label="Dropped" value={job.droppedNum} />
              </Stack>
              <Box>
                <Typography mb="10px">Choose status to close Job</Typography>
                <Stack flexDirection="row" gap="12px">
                  <CloseJobSuccess jobId={job.id} />
                  <CloseJobFailed jobId={job.id} />
                </Stack>
              </Box>
            </Stack>
          </Stack>
        ))}
    </Stack>
  )
}

export default TheJobsList
