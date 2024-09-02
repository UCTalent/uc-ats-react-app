import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ButtonContained } from "components/common"
// import { useModalAtom } from "hooks/atoms"
import { APP_HEADER_HEIGHT } from "constants/STYLE"
import { IconPlus } from "assets/icons"
// import { MODAL_ID } from "constants/MODAL_ID"
import { PAGE_MAP } from "constants/PAGE_MAP"

const TopBarWithTitle = () => {
  const { palette } = useTheme()
  // const { pushModal } = useModalAtom()
  const navigate = useNavigate()

  return (
    <Stack
      flexDirection="row"
      sx={{
        height: 68,
        alignItems: "center",
        gap: "16px",
        position: "sticky",
        top: APP_HEADER_HEIGHT,
        px: "28px",
        bgcolor: palette.background.accent,
        zIndex: 10,
      }}
    >
      <Typography sx={{ fontSize: "34px", fontWeight: 600 }}>Jobs</Typography>
      <ButtonContained
        startIconSrc={IconPlus}
        sx={{ height: "36px", px: "16px" }}
        onClick={() => navigate(PAGE_MAP.POST_JOB)}
      >
        Post A Job
      </ButtonContained>
    </Stack>
  )
}

export default TopBarWithTitle
