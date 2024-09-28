import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"

const UserAvatarWithDetails = () => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="16px" sx={{ p: "16px" }}>
      <Avatar
        src="https://danviet.mediacdn.vn/2020/10/23/509-16034584963211832639631.jpg"
        sx={{ width: "80px", height: "80px" }}
      />
      <Stack>
        <Stack flexDirection="row" gap="12px" alignItems={"center"}>
          <Typography variant="body1" sx={{ fontSize: "24px", fontWeight: 700 }}>
            Le Quang Duy
          </Typography>
          <Chip label="Hired" color="primary" size="small" />
        </Stack>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
          Product Lead @Microsoft
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
          New York, United State
        </Typography>
      </Stack>
    </Stack>
  )
}

export default UserAvatarWithDetails
