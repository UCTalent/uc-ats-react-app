import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const TopBarWithTitle = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        minHeight: 68,
        alignItems: "center",
        gap: "16px",
        // position: "sticky",
        // top: 0,
        px: "28px",
        bgcolor: "background.accent",
        zIndex: 10,
      }}
    >
      <Typography sx={{ fontSize: "34px", fontWeight: 600 }}>Job Referrals</Typography>
    </Stack>
  )
}

export default TopBarWithTitle
