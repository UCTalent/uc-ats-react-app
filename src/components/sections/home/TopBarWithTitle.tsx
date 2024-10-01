import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import ButtonContained from "components/common/buttons/ButtonContained"
import IconPlus from "assets/icons/plus.svg"
import { UCT_LINK_PAGE } from "constants/UCT_WEB"
import { openLinkInNewTab } from "utils/common"

const TopBarWithTitle = () => {
  const onClickPostJob = () => {
    openLinkInNewTab(UCT_LINK_PAGE.POST_JOB)
  }
  return (
    <Stack
      flexDirection="row"
      sx={{
        minHeight: 68,
        alignItems: "center",
        gap: "16px",
        // position: "sticky",
        // top: 0,
        px: "28px",
        bgcolor: "background.accent",
        zIndex: 10,
      }}
    >
      <Typography sx={{ fontSize: "34px", fontWeight: 600 }}>Jobs</Typography>
      <ButtonContained
        startIconSrc={IconPlus}
        sx={{ height: "36px", px: "16px" }}
        onClick={onClickPostJob}
      >
        Post A Job
      </ButtonContained>
    </Stack>
  )
}

export default TopBarWithTitle
