import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material"
import { ButtonContained } from "components/common"
import { APP_HEADER_HEIGHT } from "constants/STYLE"
import { IconPlus } from "assets/icons"

const TopBarWithTitle = () => {
  const { palette } = useTheme()

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
      <ButtonContained startIconSrc={IconPlus} sx={{ height: "36px", px: "16px" }}>
        Post A Job
      </ButtonContained>
    </Stack>
  )
}

export default TopBarWithTitle
