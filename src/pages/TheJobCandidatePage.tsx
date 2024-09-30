import { useCallback, useRef } from "react"
import { Outlet, useParams } from "react-router-dom"
import { DragStartParams } from "react-smooth-dnd"
import Stack from "@mui/material/Stack"
import DndContainer from "components/common/dnd/DndContainer"
import DndDraggable from "components/common/dnd/DndDraggable"
import CandidateStageColumn from "components/sections/job-detail/CandidateStageColumn"
import CandidateStageColumnCard from "components/subsections/job-detail/CandidateStageColumnCard"
import useDndKanbanBoard from "hooks/useDndKanbanBoard"
import { CANDIDATE_PROCESS } from "utils/mockDndScene"
import { MOCK_DND_SCENE_V2 } from "utils/mockDndSceneV2"
import { bindClass } from "utils/bindClass"
import styles from "assets/css/dnd.module.css"

const cx = bindClass(styles)

const TheJobCandidatePage = () => {
  const { jobId } = useParams()
  const dndBoardRef = useRef<HTMLDivElement | null>(null)

  const { dataToRender, onCardDrop, onCardDragStart, onDragEnter, onCardDragEnd, getCardPayload } =
    useDndKanbanBoard<object>(MOCK_DND_SCENE_V2)

  const scrollToDndBoard = useCallback(() => {
    if (!dndBoardRef.current) return
    dndBoardRef.current.scrollIntoView({ block: "start" })
  }, [])

  const handleDragStart = useCallback(
    (e: DragStartParams) => {
      scrollToDndBoard()
      onCardDragStart(e)
    },
    [onCardDragStart, scrollToDndBoard]
  )

  return (
    <>
      <Stack
        ref={dndBoardRef}
        sx={{
          flexGrow: 1,
          py: "16px",
          px: "20px",
          zIndex: 10,
          overflow: "auto",
        }}
      >
        <DndContainer orientation="horizontal" autoScrollEnabled>
          <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
            {Object.keys(dataToRender).map((columnId, columnIndex) => (
              <CandidateStageColumn
                key={columnId}
                colors={CANDIDATE_PROCESS[columnIndex].colors}
                name={CANDIDATE_PROCESS[columnIndex].name}
                columnLength={dataToRender[columnId].length}
                columnHtmlId={columnId}
                onScroll={scrollToDndBoard}
              >
                <DndContainer
                  orientation="vertical"
                  groupName="col"
                  getChildPayload={(index) => getCardPayload(columnId, index)}
                  onDragStart={handleDragStart}
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
                    <DndDraggable key={card.id} sx={{ py: "12px" }}>
                      <CandidateStageColumnCard candidate={{ id: card.id }} jobId={jobId} />
                    </DndDraggable>
                  ))}
                </DndContainer>
              </CandidateStageColumn>
            ))}
          </Stack>
        </DndContainer>
      </Stack>
      <Outlet />
    </>
  )
}

export default TheJobCandidatePage
