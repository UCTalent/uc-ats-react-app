import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material"
import { IconSVG } from "components/common"
import { IconRemote } from "assets/icons"

const RemoteTag = () => {
  const { palette } = useTheme()
  return (
    <Stack flexDirection="row" alignItems="center" gap="3px" sx={{ color: palette.primary.main }}>
      <IconSVG src={IconRemote} alt="remote" width="20px" height="20px" />
      Remote
    </Stack>
  )
}

export default RemoteTag
