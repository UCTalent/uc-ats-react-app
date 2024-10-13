import { memo, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import dayjs from "dayjs"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
// import Chip from "@mui/material/Chip"
import IconSVG from "components/common/IconSVG"
import UserAvatar from "components/common/user-avatar/UserAvatar"
import IconThunder from "assets/icons/thunder.svg"
import { JobCandidatesQueryType } from "hooks/queries/useJobCandidatesQuery"
import { CANDIDATE_CARD_HEIGHT } from "constants/STYLE"
import { talentOverviewAtom } from "store/talentOverviewAtom"
import { PAGE_MAP } from "constants/PAGE_MAP"

interface TypeProps {
  candidate: JobCandidatesQueryType["business"]["job"]["jobApplies"][0]
  jobId: string
  status: string
}

const CandidateStageColumnCard: React.FC<TypeProps> = ({ candidate, jobId, status }) => {
  const { candidateId } = useParams()
  const setTalentOverview = useRecoilState(talentOverviewAtom)[1]
  const navigate = useNavigate()

  useEffect(() => {
    if (!candidateId || candidateId !== candidate.talent.id) return
    setTalentOverview((prev) => ({ ...prev, status }))
  }, [setTalentOverview, status, candidateId, candidate.talent.id])

  const handleCardClick = useCallback(() => {
    setTalentOverview((prev) => ({ ...prev, status }))
    navigate(PAGE_MAP.JOB_CANDIDATE_SUMMARY(jobId, candidate.talent.id))
  }, [candidate.talent.id, jobId, navigate, setTalentOverview, status])

  return (
    <Stack
      sx={{
        position: "relative",
        justifyContent: "space-between",
        minWidth: "100%",
        minHeight: `${CANDIDATE_CARD_HEIGHT - 8 * 2}px`,
        px: "16px",
        py: "12px",
        bgcolor: "#FFFFFF",
        borderRadius: "8px",
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between" gap="4px">
        <UserAvatar
          name={candidate.talent.user.name}
          email={candidate.talent.user.email}
          avatar={candidate.talent.user.avatar}
          onClick={handleCardClick}
        />
        {/* <Chip
          label="100%"
          size="small"
          sx={{
            height: "20px",
            fontSize: "12px",
            color: "#14B8A6",
            bgcolor: "rgba(20, 184, 166, 0.2)",
          }}
        /> */}
      </Stack>
      <Stack flexDirection="row" justifyContent="end">
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <IconSVG src={IconThunder} alt="location" width="14px" height="14px" />
          <Typography sx={{ fontSize: "14px" }}>
            {dayjs(candidate.createdAt).format("HH:mm, DD/MM/YYYY")}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default memo(CandidateStageColumnCard)
