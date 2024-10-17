import { useCallback, useMemo, useRef, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import cloneDeep from "lodash.clonedeep"
import Stack from "@mui/material/Stack"
import DndContainer from "components/common/dnd/DndContainer"
import DndDraggable from "components/common/dnd/DndDraggable"
import CandidateStageColumn from "components/sections/job-detail/CandidateStageColumn"
import CandidateStageColumnCard from "components/subsections/job-detail/CandidateStageColumnCard"
import DndTriggerScrollContainers from "components/subsections/job-detail/DndTriggerScrollContainers"
import useJobCandidatesQuery, { JobCandidatesQueryType } from "hooks/queries/useJobCandidatesQuery"
import useDndKanbanBoard from "hooks/useDndKanbanBoard"
import { CANDIDATE_PROCESS } from "utils/mockDndScene"
import { bindClass } from "utils/bindClass"
import {
  CANDIDATE_STATUS_MAPPING,
  dndSceneInitial,
  JOB_APPLY_STATUS,
  JOB_APPLY_STATUS_MAPPING,
} from "constants/JOB"
import { IUpdateJobApplyStatusRequest } from "types/api/job-apply"
import { IDndResult } from "types/dnd"
import JobApplyAPI from "services/api/job-apply"
import styles from "assets/css/dnd.module.css"

const cx = bindClass(styles)

const TheJobCandidatePage = () => {
  const { jobId } = useParams()
  const { data, refetch: refetchJobCandidates } = useJobCandidatesQuery(jobId)
  const dndBoardRef = useRef<HTMLDivElement | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const web3meta = useMemo(() => data?.business.job.web3meta, [data?.business.job.web3meta])

  const dndScene = useMemo(
    () =>
      data?.business.job.jobApplies.reduce((acc, candidate) => {
        const groupKey = CANDIDATE_STATUS_MAPPING[candidate.status]
        acc[groupKey]?.push({ id: candidate.talent.id, data: candidate })
        return acc
      }, cloneDeep(dndSceneInitial)),
    [data?.business.job.jobApplies]
  )

  const handleDndDrop = useCallback(
    async (
      result: IDndResult,
      payload: JobCandidatesQueryType["business"]["job"]["jobApplies"][0]
    ) => {
      const body: IUpdateJobApplyStatusRequest = {
        job_apply: {
          status: JOB_APPLY_STATUS_MAPPING[result.toColumnId],
        },
      }
      if (result.toColumnId === JOB_APPLY_STATUS.REJECTED) {
        body.job_apply.rejected_note = "Rejected"
      }
      try {
        await JobApplyAPI.updateJobApplyStatus(payload.id, body)
        // refetchJobCandidates()
      } catch (error) {
        console.log(error)
      }
    },
    []
  )

  const {
    dataToRender,
    onCardDrop,
    onCardDragStart,
    onDragEnter,
    onCardDragEnd,
    getCardPayload,
    payload,
  } = useDndKanbanBoard<JobCandidatesQueryType["business"]["job"]["jobApplies"][0]>(
    dndScene,
    handleDndDrop,
    { allowDropInnerColumn: false }
  )

  return (
    <>
      <Stack ref={dndBoardRef} sx={{ flexGrow: 1, px: "20px", py: "16px", overflowX: "scroll" }}>
        <DndContainer orientation="horizontal" autoScrollEnabled>
          <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
            {Object.keys(dataToRender).map((columnId, columnIndex) => (
              <CandidateStageColumn
                key={columnId}
                colors={CANDIDATE_PROCESS[columnIndex].colors}
                name={CANDIDATE_PROCESS[columnIndex].name}
                columnLength={dataToRender[columnId].length}
                columnHtmlId={columnId}
                isDragOver={isDragOver}
              >
                <DndContainer
                  orientation="vertical"
                  groupName="col"
                  getChildPayload={(index) => getCardPayload(columnId, index)}
                  onDragStart={onCardDragStart}
                  onDragEnter={() => onDragEnter(columnId)}
                  onDragEnd={onCardDragEnd}
                  onDrop={(dropResult) => onCardDrop(columnId, dropResult)}
                  dragClass={cx("card-ghost")}
                  dropClass={cx("card-ghost-drop")}
                  dropPlaceholder={{
                    showOnTop: true,
                    animationDuration: 150,
                    className: cx("drop-preview"),
                  }}
                  dropPlaceholderAnimationDuration={200}
                  autoScrollEnabled
                >
                  {dataToRender[columnId].map((card) => (
                    <DndDraggable key={card.id} sx={{ py: "8px" }}>
                      <CandidateStageColumnCard
                        candidate={card.data}
                        jobId={jobId}
                        status={CANDIDATE_PROCESS[columnIndex].name}
                        web3meta={web3meta}
                        refetchJobCandidates={refetchJobCandidates}
                      />
                    </DndDraggable>
                  ))}
                </DndContainer>
              </CandidateStageColumn>
            ))}
          </Stack>
          {payload && (
            <DndTriggerScrollContainers
              setIsDragOver={setIsDragOver}
              dndBoardElement={dndBoardRef.current}
            />
          )}
        </DndContainer>
      </Stack>
      <Outlet />
    </>
  )
}

export default TheJobCandidatePage
