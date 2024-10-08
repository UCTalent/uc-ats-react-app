import { Link } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
// import ButtonContained from "components/common/buttons/ButtonContained"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import UserAvatarWithChevron from "components/common/user-avatar/UserAvatarWithChevron"
import useCurrentUserAtom from "hooks/atoms/useCurrentUserAtom"
// import useModalAtom from "hooks/atoms/useModalAtom"
import LogoUctText from "assets/logos/uctalent-text.png"
import IconBell from "assets/icons/bell.svg"
import { APP_HEADER_HEIGHT, APP_HEADER_LOGO_WIDTH } from "constants/STYLE"
// import { MODAL_ID } from "constants/MODAL_ID"
import { Tooltip, type SxProps } from "@mui/material"

interface IProps {
  sx?: SxProps
}

const TAB_MENU = ["Home", "Jobs", "Talents", "Challenges"]

const AppHeader: React.FC<IProps> = ({ sx }) => {
  // const { replaceModal } = useModalAtom()
  const { currentUser } = useCurrentUserAtom()
  return (
    <Box
      sx={{
        borderBottom: "1px solid",
        borderBottomColor: "border.outlined",
        bgcolor: "background.default",
        px: "16px",
        zIndex: 20,
        ...sx,
      }}
    >
      <Stack
        direction="row"
        sx={{ height: APP_HEADER_HEIGHT, justifyContent: "space-between", alignItems: "center" }}
      >
        <Link to="/">
          <img src={LogoUctText} alt="UCTalent" width={APP_HEADER_LOGO_WIDTH} />
        </Link>

        <Stack flexDirection="row" gap="8px">
          {TAB_MENU.map((item) => (
            <Tooltip title="Coming soon">
              <Box>
                <Button
                  key={item}
                  variant="text"
                  color="secondary"
                  sx={{ fontSize: "16px", textTransform: "none" }}
                  disabled
                >
                  {item}
                </Button>
              </Box>
            </Tooltip>
          ))}
        </Stack>
        {/* {!currentUser.isLoggedIn && (
          <ButtonContained onClick={() => replaceModal(MODAL_ID.LOGIN)}>Login</ButtonContained>
        )} */}
        {currentUser.isLoggedIn && (
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <IconButton disabled sx={{ opacity: 0.2 }}>
              <img src={IconBell} alt="Notification" width={32} height={32} />
            </IconButton>
            <Divider
              orientation="vertical"
              sx={{ height: "16px", marginRight: "20px", marginLeft: "4px" }}
            />
            <UserAvatarWithChevron
              name={currentUser.name}
              email={currentUser.email}
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  )
}

export default AppHeader
