import { useRef, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import Stack from "@mui/material/Stack"
import DndContainer from "components/common/dnd/DndContainer"
import DndDraggable from "components/common/dnd/DndDraggable"
import CandidateStageColumn from "components/sections/job-detail/CandidateStageColumn"
import CandidateStageColumnCard from "components/subsections/job-detail/CandidateStageColumnCard"
import DndTriggerScrollContainers from "components/subsections/job-detail/DndTriggerScrollContainers"
import useJobCandidatesQuery from "hooks/queries/useJobCandidatesQuery"
import useDndKanbanBoard from "hooks/useDndKanbanBoard"
import { CANDIDATE_PROCESS } from "utils/mockDndScene"
import { MOCK_DND_SCENE_V2 } from "utils/mockDndSceneV2"
import { bindClass } from "utils/bindClass"
import styles from "assets/css/dnd.module.css"

const cx = bindClass(styles)

const TheJobCandidatePage = () => {
  const { jobId } = useParams()
  const { data } = useJobCandidatesQuery(jobId)
  console.log(data)

  const dndBoardRef = useRef<HTMLDivElement | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const {
    dataToRender,
    onCardDrop,
    onCardDragStart,
    onDragEnter,
    onCardDragEnd,
    getCardPayload,
    payload,
  } = useDndKanbanBoard<object>(MOCK_DND_SCENE_V2)

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
                      <CandidateStageColumnCard candidate={{ id: card.id }} jobId={jobId} />
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
