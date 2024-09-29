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
import { SxProps } from "@mui/material"

interface IProps {
  sx?: SxProps
}

const TitleOverview: React.FC<IProps> = ({ sx }) => {
  const navigate = useNavigate()

  const horizontalOverview = useMemo(() => {
    const overview = [
      { id: "location", icon: IconLocation, text: "North Las Vegas, USA" },
      { id: "jobType", icon: IconJobType, text: "Full time" },
      { id: "experience", icon: IconStar, text: "4-6 yrs" },
      { id: "salary", icon: IconSalary, text: "$100k-$150k/yr" },
    ]
    return (
      <Stack flexDirection="row" alignItems="center" gap="10px">
        {overview.map((item, index) => (
          <Fragment key={item.id}>
            <Stack flexDirection="row" alignItems="center" gap="3px">
              <IconSVG src={item.icon} width="20px" height="20px" />
              <Typography variant="body2">{item.text}</Typography>
            </Stack>
            {index !== overview.length - 1 && <DotDivider />}
          </Fragment>
        ))}
        <RemoteTag />
      </Stack>
    )
  }, [])

  return (
    <Stack flexDirection="row" sx={{ height: "84px", alignItems: "center", gap: "24px", ...sx }}>
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
        <Typography sx={{ fontWeight: 600, fontSize: "34px", mb: "4px" }}>Product Lead</Typography>
        {horizontalOverview}
      </Stack>
    </Stack>
  )
}

export default TitleOverview
