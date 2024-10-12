import { useNavigate } from "react-router-dom"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import JobCard from "components/common/JobCard"
import NumberWithLabelVerticalTag from "components/common/tags/NumberWithLabelVerticalTag"
import IconSVG from "components/common/IconSVG"
import IconThreeDotsHorizontal from "assets/icons/three-dots-horizontal.svg"
import { JobsListType } from "hooks/queries/useJobsQuery"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { FC } from "react"

interface IProps {
  data: JobsListType
}

const TheJobsList: FC<IProps> = ({ data }) => {
  const navigate = useNavigate()

  const jobs = data?.business.jobs.jobs

  return (
    <Stack sx={{ flexGrow: 1, pt: "12px" }}>
      {data &&
        Array.isArray(jobs) &&
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
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconSVG src={IconThreeDotsHorizontal} alt="Options" />
              </IconButton>
            </Stack>
          </Stack>
        ))}
    </Stack>
  )
}

export default TheJobsList
