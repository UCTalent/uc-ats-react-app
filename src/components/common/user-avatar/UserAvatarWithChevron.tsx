import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import IconChevronDown from "assets/icons/chevron-down.svg"
import { type SxProps } from "@mui/material"

interface IProps {
  sx?: SxProps
  name: string
  email: string
  avatar?: string
}

const UserAvatarWithChevron: React.FC<IProps> = ({ sx, name, email, avatar }) => {
  return (
    <Stack flexDirection="row" sx={{ gap: "8px", ...sx }}>
      <Avatar src={avatar} alt={name} sx={{ width: 48, height: 48 }} />
      <Stack>
        <Stack
          flexDirection="row"
          sx={{ justifyContent: "space-between", alignItems: "center", gap: "4px" }}
        >
          <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 600 }}>
            {name}
          </Typography>
          <img src={IconChevronDown} alt="User menu" width={16} height={16} />
        </Stack>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
          {email}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default UserAvatarWithChevron
