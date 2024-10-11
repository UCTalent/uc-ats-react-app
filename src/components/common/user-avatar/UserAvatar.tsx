import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { type SxProps } from "@mui/material"

interface IProps {
  name: string
  email: string
  avatar: string
  sx?: SxProps
  avatarSize?: number
  onClick?: () => void
}

const UserAvatar: React.FC<IProps> = ({ name, email, avatar, sx, avatarSize = 40, onClick }) => {
  return (
    <Stack
      flexDirection="row"
      sx={{ gap: "8px", cursor: onClick && "pointer", ...sx }}
      onClick={onClick}
    >
      <Avatar
        src={avatar}
        alt={name}
        sx={{ width: avatarSize, height: avatarSize, userSelect: "none", pointerEvents: "none" }}
      />
      <Stack>
        <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
          {email}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default UserAvatar
