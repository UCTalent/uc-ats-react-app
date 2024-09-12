import { useMemo } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const JobOverviewBox = () => {
  const dataOverview = useMemo(
    () => [
      { title: "Specialty", value: "Product Manager" },
      { title: "Role", value: "Product" },
      { title: "Level of Experience", value: "3-5 years" },
      { title: "Management Level", value: "6-10" },
    ],
    []
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
