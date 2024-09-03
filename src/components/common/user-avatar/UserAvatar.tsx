import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { type SxProps } from "@mui/material"

interface IProps {
  sx?: SxProps
  avatarSize?: number
}

const UserAvatar: React.FC<IProps> = ({ sx, avatarSize = 40 }) => {
  return (
    <Stack flexDirection="row" sx={{ gap: "8px", ...sx }}>
      <Avatar
        src="https://danviet.mediacdn.vn/2020/10/23/509-16034584963211832639631.jpg"
        alt="Duy"
        sx={{ width: avatarSize, height: avatarSize }}
      />
      <Stack>
        <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 600 }}>
          Le Quang Duy
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
          uct.viet@gmail.com
        </Typography>
      </Stack>
    </Stack>
  )
}

export default UserAvatar
