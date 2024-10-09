import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
// import Chip from "@mui/material/Chip"
import DotDivider from "components/common/DotDivider"
import IconLocation from "assets/icons/location.svg"
import IconJobType from "assets/icons/job-type.svg"
import { JOB_TYPE, JOB_TYPE_NAME } from "constants/JOB"

interface IProps {
  jobTitle: string
  organizationName: string
  organizationLogo: string
  city: string
  country: string
  jobType: JOB_TYPE
  onClickTitle?: () => void
}

const JobCard: React.FC<IProps> = ({
  jobTitle,
  organizationName,
  organizationLogo,
  city,
  country,
  jobType,
  onClickTitle,
}) => {
  return (
    <Stack flexDirection="row" sx={{ alignItems: "center", gap: "27px" }}>
      <Avatar src={organizationLogo} alt={jobTitle} sx={{ width: 60, height: 60 }}>
        {organizationName?.charAt(0).toUpperCase()}
      </Avatar>
      <Stack gap="8px">
        <Stack flexDirection="row" gap="8px">
          <Typography sx={{ fontWeight: 600 }}>
            <Box
              component="span"
              sx={{ fontSize: "20px", cursor: onClickTitle && "pointer" }}
              onClick={onClickTitle}
            >
              {jobTitle}
            </Box>
            <Box component="span" sx={{ color: "text.secondary" }}>
              , {organizationName}
            </Box>
          </Typography>
          {/* <Chip
            label="Active"
            color="success"
            size="small"
            sx={{
              height: "32px",
              color: "#14B8A6",
              bgcolor: "rgba(20, 184, 166, 0.2)",
            }}
          /> */}
        </Stack>
        <Stack
          flexDirection="row"
          sx={{ alignItems: "center", gap: "10px", color: "text.secondary" }}
        >
          {(city || country) && (
            <>
              <Stack flexDirection="row" sx={{ alignItems: "center", gap: "6px" }}>
                <img src={IconLocation} alt="location" width="20px" height="20px" />
                <Box component="span">
                  {city}
                  {city && city.endsWith(",") && ","} {country}
                </Box>
              </Stack>
              <DotDivider />
            </>
          )}
          <Stack flexDirection="row" sx={{ alignItems: "center", gap: "6px" }}>
            <img src={IconJobType} alt="job type" width="20px" height="20px" />
            <Box component="span">{JOB_TYPE_NAME[jobType]}</Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default JobCard
