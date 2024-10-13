import { useNavigate } from "react-router-dom"
import { Fragment, useMemo } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import DotDivider from "components/common/DotDivider"
import RemoteTag from "components/common/tags/RemoteTag"
import IconSVG from "components/common/IconSVG"
import IconBackArrow from "assets/icons/back-arrow.svg"
import IconLocation from "assets/icons/location.svg"
import IconJobType from "assets/icons/job-type.svg"
import IconStar from "assets/icons/star.svg"
import IconSalary from "assets/icons/salary.svg"
import SkeletonJobTitleOverview from "components/skeletons/JobTitleOverview"
import { SxProps } from "@mui/material"
import { IJobOverviewState } from "types/store/job-overview"
import { JOB_TYPE_NAME } from "constants/JOB"

interface IProps {
  jobOverview: IJobOverviewState
  sx?: SxProps
}

const TitleOverview: React.FC<IProps> = ({ jobOverview, sx }) => {
  const navigate = useNavigate()

  const horizontalOverview = useMemo(() => {
    const overview = [
      { id: "location", icon: IconLocation, text: jobOverview?.place },
      {
        id: "jobType",
        icon: IconJobType,
        text: jobOverview?.jobType ? JOB_TYPE_NAME[jobOverview?.jobType] : "",
      },
      { id: "experience", icon: IconStar, text: `${jobOverview?.exp} yrs` },
      { id: "salary", icon: IconSalary, text: jobOverview?.salary },
    ]

    if (!jobOverview) return <SkeletonJobTitleOverview />

    return (
      <Stack flexDirection="row" alignItems="center" gap="10px">
        {overview.map(
          (item, index) =>
            item.text && (
              <Fragment key={item.id}>
                <Stack flexDirection="row" alignItems="center" gap="3px">
                  <IconSVG src={item.icon} width="20px" height="20px" />
                  <Typography variant="body2">{item.text}</Typography>
                </Stack>
                {index !== overview.length - 1 && <DotDivider />}
              </Fragment>
            )
        )}
        <RemoteTag />
      </Stack>
    )
  }, [jobOverview])

  return (
    <Stack flexDirection="row" sx={{ minHeight: "84px", alignItems: "center", gap: "24px", ...sx }}>
      <IconButton
        sx={{
          width: "36px",
          height: "36px",
          borderRadius: "100%",
          p: 0,
          bgcolor: "#F8F7FF",
          "&:hover": { bgcolor: "#F8F7FF" },
        }}
        onClick={() => navigate("/")}
      >
        <IconSVG src={IconBackArrow} />
      </IconButton>
      <Stack>
        <Typography sx={{ fontWeight: 600, fontSize: "34px", mb: "4px" }}>
          {jobOverview?.title}
        </Typography>
        {horizontalOverview}
      </Stack>
    </Stack>
  )
}

export default TitleOverview
