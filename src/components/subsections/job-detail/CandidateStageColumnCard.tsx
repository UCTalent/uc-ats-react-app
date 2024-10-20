import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import dayjs from "dayjs"
import { memo, useCallback, useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil"
// import Chip from "@mui/material/Chip"
import IconThunder from "assets/icons/thunder.svg"
import IconSVG from "components/common/IconSVG"
import ModalCommon from "components/common/ModalCommon"
import ButtonContained from "components/common/buttons/ButtonContained"
import UserAvatar from "components/common/user-avatar/UserAvatar"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { CANDIDATE_CARD_HEIGHT } from "constants/STYLE"
import useCloseJobSmartContract from "hooks/abi/useCloseJobSmartContract"
import { JobCandidatesQueryType } from "hooks/queries/useJobCandidatesQuery"
import { talentOverviewAtom } from "store/talentOverviewAtom"
import { TFunction } from "types/common"
import { Web3metaType } from "types/smart-contract"
import { checkJobCreatedBySmartContract } from "utils/checkJobCreatedBySmartContract"

interface TypeProps {
  candidate: JobCandidatesQueryType["business"]["job"]["jobApplies"][0]
  jobId: string
  status: string
  web3meta?: Web3metaType
  jobTitle: string
  talentAddress?: string
  referrerAddress?: string
  applyTimestamp?: number
  referraTimestamp?: number
  refetchJobCandidates: TFunction
}

const CandidateStageColumnCard: React.FC<TypeProps> = ({
  candidate,
  jobId,
  status,
  web3meta,
  jobTitle,
  talentAddress,
  referrerAddress,
  applyTimestamp,
  referraTimestamp,
  refetchJobCandidates,
}) => {
  const { candidateId } = useParams()
  const setTalentOverview = useRecoilState(talentOverviewAtom)[1]
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isCloseJobStatus = searchParams.get("close-job") === "success"
  const isCreatedBySmartContract = checkJobCreatedBySmartContract(web3meta.events)
  const { mutate, loading } = useCloseJobSmartContract({ isCreatedBySmartContract })
  const [modalConfirm, setModalConfirm] = useState(false)

  useEffect(() => {
    if (!candidateId || candidateId !== candidate.id) return
    setTalentOverview((prev) => ({ ...prev, status }))
  }, [setTalentOverview, status, candidateId, candidate.id])

  const handleCardClick = useCallback(() => {
    if (isCloseJobStatus) return
    setTalentOverview((prev) => ({ ...prev, status }))
    navigate(PAGE_MAP.JOB_CANDIDATE_SUMMARY(jobId, candidate.id))
  }, [candidate.id, jobId, navigate, setTalentOverview, status, isCloseJobStatus])

  const handleCloseJob = () => {
    mutate({
      closeJobStatus: "success",
      idJob: jobId,
      idJobApplies: candidate.id,
      talentAddress,
      referrerAddress,
      applyTimestamp,
      referraTimestamp,
      callback: refetchJobCandidates,
    })
    setModalConfirm(false)
  }

  return (
    <>
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
          const candidateStatus = ["new", "email_sent", "under_review", "interviewing", "offering"]
          const enableStatusOpen = candidateStatus.find((item) => item === candidate.status)
          if (loading || !isCloseJobStatus || !enableStatusOpen) return
          if (isCloseJobStatus) {
            setModalConfirm(true)
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
      <ModalCommon open={modalConfirm}>
        <Stack p={3} textAlign="center" sx={{ maxWidth: "400px" }}>
          <Typography variant="h5" mb="12px">
            Ideal candidate!
          </Typography>
          <Typography mb="24px">
            <strong>{candidate.talent.user.name}</strong> will be choose for {jobTitle}. Please
            confirm to close this job.
          </Typography>
          <Stack flexDirection="row" gap="16px">
            <ButtonContained
              sx={{
                backgroundColor: "text.disabled",
                "&:hover": { backgroundColor: "text.disabled" },
                flex: 1,
              }}
              onClick={() => setModalConfirm(false)}
            >
              Undo
            </ButtonContained>
            <ButtonContained disabled={loading} sx={{ flex: 1 }} onClick={handleCloseJob}>
              Confirm
            </ButtonContained>
          </Stack>
        </Stack>
      </ModalCommon>
    </>
  )
}

export default memo(CandidateStageColumnCard)
