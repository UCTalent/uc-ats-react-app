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

  return (
    <Stack sx={{ flexGrow: 1, pt: "12px" }}>
      {data &&
        Array.isArray(data.jobs) &&
        data.jobs.map((job, index) => (
          <Stack
            key={job.id}
            flexDirection="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mx: "28px",
              py: "24px",
              borderBottom: index !== data.jobs.length - 1 && "1px solid",
              borderColor: "border.outlined",
            }}
          >
            <JobCard
              jobTitle={job.title}
              organizationName={job.organization.name}
              organizationLogo={job.organization.logoUrl}
              city={job.location}
              country={job.country?.codeIso3}
              jobType={job.jobType}
              onClickTitle={() => navigate(PAGE_MAP.JOB_CANDIDATE(job.id.toString()))}
            />
            <Stack flexDirection="row" gap="108px" sx={{ px: "24px" }}>
              <Stack flexDirection="row" gap="10px">
                <NumberWithLabelVerticalTag label="Viewed" value={100} />
                <NumberWithLabelVerticalTag label="Applied" value={100} />
                <NumberWithLabelVerticalTag label="Hired" value={100} />
                <NumberWithLabelVerticalTag label="Dropped" value={100} />
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
