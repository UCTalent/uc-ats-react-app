import { Fragment, useMemo } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import DotDivider from "components/common/DotDivider"
import RemoteTag from "components/common/tags/RemoteTag"
import IconSVG from "components/common/IconSVG"
import IconLocation from "assets/icons/location.svg"
import IconJobType from "assets/icons/job-type.svg"
import IconStar from "assets/icons/star.svg"
import IconSalary from "assets/icons/salary.svg"

const TitleOverview = () => {
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
    <Stack>
      <Typography sx={{ fontWeight: 600, fontSize: "34px", mb: "4px" }}>Product Lead</Typography>
      {horizontalOverview}
    </Stack>
  )
}

export default TitleOverview
