import Stack from "@mui/material/Stack"
import IconSVG from "components/common/IconSVG"
import IconRemote from "assets/icons/remote.svg"

const RemoteTag = () => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="3px" sx={{ color: "primary.main" }}>
      <IconSVG src={IconRemote} alt="remote" width="20px" height="20px" />
      Remote
    </Stack>
  )
}

export default RemoteTag
