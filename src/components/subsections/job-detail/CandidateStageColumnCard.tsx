import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import dayjs from "dayjs"
import { memo, useCallback, useEffect } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil"
// import Chip from "@mui/material/Chip"
import IconThunder from "assets/icons/thunder.svg"
import IconSVG from "components/common/IconSVG"
import UserAvatar from "components/common/user-avatar/UserAvatar"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { CANDIDATE_CARD_HEIGHT } from "constants/STYLE"
import useCloseJobSmartContract from "hooks/abi/useCloseJobSmartContract"
import { JobCandidatesQueryType } from "hooks/queries/useJobCandidatesQuery"
import { talentOverviewAtom } from "store/talentOverviewAtom"
import { Web3metaType } from "types/smart-contract"
import { checkJobCreatedBySmartContract } from "utils/checkJobCreatedBySmartContract"
import { TFunction } from "types/common"

interface TypeProps {
  candidate: JobCandidatesQueryType["business"]["job"]["jobApplies"][0]
  jobId: string
  status: string
  web3meta?: Web3metaType
  refetchJobCandidates: TFunction
}

const CandidateStageColumnCard: React.FC<TypeProps> = ({
  candidate,
  jobId,
  status,
  web3meta,
  refetchJobCandidates,
}) => {
  const { candidateId } = useParams()
  const setTalentOverview = useRecoilState(talentOverviewAtom)[1]
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isCloseJobStatus = searchParams.get("close-job") === "success"
  const { mutate, loading } = useCloseJobSmartContract()

  useEffect(() => {
    if (!candidateId || candidateId !== candidate.id) return
    setTalentOverview((prev) => ({ ...prev, status }))
  }, [setTalentOverview, status, candidateId, candidate.id])

  const handleCardClick = useCallback(() => {
    if (isCloseJobStatus) return
    setTalentOverview((prev) => ({ ...prev, status }))
    navigate(PAGE_MAP.JOB_CANDIDATE_SUMMARY(jobId, candidate.id))
  }, [candidate.id, jobId, navigate, setTalentOverview, status, isCloseJobStatus])

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
      onClick={() => {
        if (loading) return
        if (isCloseJobStatus) {
          const isCreatedBySmartContract = checkJobCreatedBySmartContract(web3meta.events)
          mutate({
            closeJobStatus: "success",
            idJob: jobId,
            idJobApplies: candidate.id,
            isCreatedBySmartContract,
            callback: refetchJobCandidates,
          })
        }
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
