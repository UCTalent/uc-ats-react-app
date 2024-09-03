import { useMemo } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { IconLocation, IconJobType, IconStar, IconSalary } from "assets/icons"
import { IconSVG, DotDivider, RemoteTag } from "components/common"

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
          <>
            <Stack key={item.id} flexDirection="row" alignItems="center" gap="3px">
              <IconSVG src={item.icon} width="20px" height="20px" />
              <Typography variant="body2">{item.text}</Typography>
            </Stack>
            {index !== overview.length - 1 && <DotDivider />}
          </>
        ))}
        <RemoteTag />
      </Stack>
    )
  }, [])

  return (
    <Stack sx={{ pl: "28px" }}>
      <Typography sx={{ fontWeight: 600, fontSize: "34px", mb: "4px" }}>Product Lead</Typography>
      {horizontalOverview}
    </Stack>
  )
}

export default TitleOverview
