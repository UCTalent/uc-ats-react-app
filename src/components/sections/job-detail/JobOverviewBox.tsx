import { FC, useMemo } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { JobInformationQueryType } from "hooks/queries/useJobInformationQuery"

interface IProps {
  data: JobInformationQueryType["business"]["job"]
}

const JobOverviewBox: FC<IProps> = ({ data }) => {
  const dataOverview = useMemo(
    () => [
      { title: "Specialty", value: data.speciality.speciality },
      { title: "Role", value: data.speciality.role.name },
      { title: "Level of Experience", value: data.experienceLevel },
      { title: "Management Level", value: data.managementLevel },
    ],
    [data]
  )

  return (
    <Stack
      flexDirection="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: "86px",
        px: "24px",
        border: "1px solid",
        borderColor: "border.outlined",
        borderRadius: "16px",
      }}
    >
      {dataOverview.map((item) => (
        <Stack key={item.title} sx={{ width: "fit-content" }}>
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>{item.value}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default JobOverviewBox
