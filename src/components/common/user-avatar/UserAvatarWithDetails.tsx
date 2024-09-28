import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import IconSVG from "components/common/IconSVG"
import IconLocation from "assets/icons/location.svg"
import IconPhone from "assets/icons/phone.svg"
import IconMail from "assets/icons/mail.svg"

const UserAvatarWithDetails = () => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="16px" sx={{ p: "16px" }}>
      <Avatar
        src="https://danviet.mediacdn.vn/2020/10/23/509-16034584963211832639631.jpg"
        sx={{ width: "80px", height: "80px" }}
      />
      <Stack>
        <Stack flexDirection="row" gap="12px" alignItems="center">
          <Typography variant="body1" sx={{ fontSize: "24px", fontWeight: 700 }}>
            Le Quang Duy
          </Typography>
          <Chip label="Hired" color="primary" size="small" />
        </Stack>
        <Typography sx={{ fontSize: "14px", color: "#A0A2A3", fontWeight: 600, mb: "3px" }}>
          Product Lead @Microsoft
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap="10px">
          <Stack flexDirection="row" alignItems="center" gap="4px">
            <IconSVG src={IconLocation} alt="location" width="16px" height="16px" />
            <Typography variant="body2" sx={{ fontSize: "12px", color: "#717375" }}>
              New York, United State
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="4px">
            <IconSVG src={IconPhone} alt="phone" width="16px" height="16px" />
            <Typography variant="body2" sx={{ fontSize: "12px", color: "#717375" }}>
              +84 999 9999 9999
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="4px">
            <IconSVG src={IconMail} alt="email" width="16px" height="16px" />
            <Typography variant="body2" sx={{ fontSize: "12px", color: "#717375" }}>
              mikeB@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default UserAvatarWithDetails
