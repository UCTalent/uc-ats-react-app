import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { IconChevronDown } from "assets/icons"
import { type SxProps } from "@mui/material"

interface IProps {
  sx?: SxProps
}

const UserAvatarWithChevron: React.FC<IProps> = ({ sx }) => {
  return (
    <Stack flexDirection="row" sx={{ gap: "8px", ...sx }}>
      <Avatar
        src="https://danviet.mediacdn.vn/2020/10/23/509-16034584963211832639631.jpg"
        alt="Duy"
        sx={{ width: 48, height: 48 }}
      />
      <Stack>
        <Stack
          flexDirection="row"
          sx={{ justifyContent: "space-between", alignItems: "center", gap: "4px" }}
        >
          <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 600 }}>
            Le Quang Duy
          </Typography>
          <img src={IconChevronDown} alt="User menu" width={16} height={16} />
        </Stack>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#717375" }}>
          uct.viet@gmail.com
        </Typography>
      </Stack>
    </Stack>
  )
}

export default UserAvatarWithChevron
