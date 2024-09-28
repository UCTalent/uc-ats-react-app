import { useNavigate } from "react-router-dom"
import { memo, useMemo } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconSVG from "components/common/IconSVG"
import UserAvatar from "components/common/user-avatar/UserAvatar"
import BeautifulColorTag from "components/common/tags/BeautifulColorTag"
import MenuBasic, { type IMenuItem } from "components/common/menus/MenuBasic"
import IconThunder from "assets/icons/thunder.svg"
import IconThreeDotsVertical from "assets/icons/three-dots-vertical.svg"
import { CANDIDATE_CARD_HEIGHT } from "constants/STYLE"
import { PAGE_MAP } from "constants/PAGE_MAP"

interface TypeProps {
  candidate: { id: string }
  jobId: string
}

const CandidateStageColumnCard: React.FC<TypeProps> = ({ candidate, jobId }) => {
  const navigate = useNavigate()

  const menu: IMenuItem[] = useMemo(
    () => [
      {
        id: "profile",
        title: "View Profile",
        onClick: () => navigate(PAGE_MAP.JOB_CANDIDATE_SUMMARY(jobId, candidate.id)),
      },
      { id: "email", title: "Send Email", onClick: () => {} },
      { id: "status", title: "Status Update", onClick: () => {} },
    ],
    [candidate.id, jobId, navigate]
  )

  return (
    <Stack
      sx={{
        position: "relative",
        justifyContent: "space-between",
        minWidth: "100%",
        minHeight: `${CANDIDATE_CARD_HEIGHT - 12 * 2}px`,
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
