import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { memo, useMemo } from "react"
import { IconSVG, UserAvatar, BeautifulColorTag } from "components/common"
import { IconThunder, IconThreeDotsVertical } from "assets/icons"
import { MenuBasic, type IMenuItem } from "components/common/menus"

const CandidateStageColumnCard = () => {
  const menu: IMenuItem[] = useMemo(
    () => [
      { id: "profile", title: "View Profile", onClick: () => {} },
      { id: "email", title: "Send Email", onClick: () => {} },
      { id: "status", title: "Status Update", onClick: () => {} },
    ],
    []
  )

  return (
    <Stack
      sx={{
        position: "relative",
        justifyContent: "space-between",
        minWidth: "100%",
        minHeight: "124px",
        p: "16px",
        bgcolor: "#FFFFFF",
        borderRadius: "8px",
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <UserAvatar />
        <MenuBasic menu={menu}>
          <IconSVG src={IconThreeDotsVertical} alt="setting" width="16px" height="16px" />
        </MenuBasic>
      </Stack>
      <Stack flexDirection="row" justifyContent="end">
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <IconSVG src={IconThunder} alt="location" width="20px" height="20px" />
          <Typography>2min</Typography>
        </Stack>
      </Stack>
      <BeautifulColorTag
        label="55%"
        color="yellow"
        sx={{ position: "absolute", left: 0, top: "50%" }}
      />
    </Stack>
  )
}

export default memo(CandidateStageColumnCard)
