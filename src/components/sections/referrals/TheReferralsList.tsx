import { FC } from "react"
import { useNavigate } from "react-router-dom"
import Stack from "@mui/material/Stack"
import JobCard from "components/common/JobCard"
import EmptyData from "components/common/EmptyData"
// import Typography from "@mui/material/Typography"
// import ButtonOutlined from "components/common/buttons/ButtonOutlined"
// import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { JobsListType } from "hooks/queries/useJobsQuery"

interface IProps {
  data: JobsListType
}

const TheReferralsList: FC<IProps> = ({ data }) => {
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
            {/* <Stack flexDirection="row" alignItems="center" gap="140px" sx={{ px: "24px" }}>
              <Typography sx={{ fontWeight: 700, color: "text.accent" }}>+ 300 Points</Typography>
              <ButtonOutlined
                customColor="success.main"
                sx={{
                  color: "text.primary",
                  "&:hover svg": {
                    fill: "white",
                  },
                }}
                startIcon={<DoneRoundedIcon color="success" />}
              >
                Claim
              </ButtonOutlined>
            </Stack> */}
          </Stack>
        ))}
    </Stack>
  )
}

export default TheReferralsList
