import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import { useTheme } from "@mui/material"
import { IconLocation, IconJobType } from "assets/icons"

const JobCard = () => {
  const { palette } = useTheme()

  return (
    <Stack flexDirection="row" sx={{ alignItems: "center", gap: "27px" }}>
      <Avatar
        src="https://danviet.mediacdn.vn/2020/10/23/509-16034584963211832639631.jpg"
        alt="Duy"
        sx={{ width: 60, height: 60 }}
      />
      <Stack gap="8px">
        <Stack flexDirection="row" gap="8px">
          <Typography sx={{ fontWeight: 600 }}>
            <Box component="span" sx={{ fontSize: "20px" }}>
              Product Lead
            </Box>
            <Box component="span" sx={{ color: palette.text.secondary }}>
              , Rogo
            </Box>
          </Typography>
          <Chip
            label="Active"
            color="success"
            size="small"
            sx={{
              height: "32px",
              color: "#14B8A6",
              bgcolor: "rgba(20, 184, 166, 0.2)",
            }}
          />
        </Stack>
        <Stack
          flexDirection="row"
          sx={{ alignItems: "center", gap: "10px", color: palette.text.secondary }}
        >
          <Stack flexDirection="row" sx={{ alignItems: "center", gap: "6px" }}>
            <img src={IconLocation} alt="location" width="20px" height="20px" />
            <Box component="span">New York, USA</Box>
          </Stack>
          <Box
            sx={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              bgcolor: palette.text.secondary,
            }}
          ></Box>
          <Stack flexDirection="row" sx={{ alignItems: "center", gap: "6px" }}>
            <img src={IconJobType} alt="job type" width="20px" height="20px" />
            <Box component="span">Full-time</Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default JobCard
