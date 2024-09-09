import Stack from "@mui/material/Stack"
import useDndKanbanBoard from "hooks/useDndKanbanBoard"
import { DndContainer, DndDraggable } from "components/common/dnd"
import { CandidateStageColumn } from "components/sections/job-detail"
import { CandidateStageColumnCard } from "components/subsections/job-detail"
import { CANDIDATE_PROCESS } from "utils/mockDndScene"
import { MOCK_DND_SCENE_V2 } from "utils/mockDndSceneV2"
import { bindClass } from "utils/bindClass"
import styles from "assets/css/dnd.module.css"
import { CANDIDATE_CARD_HEIGHT } from "constants/STYLE"

const cx = bindClass(styles)

const TheJobCandidatePage = () => {
  const {
    dataToRender,
    activeColumnId,
    dragEnterColumnId,
    onCardDrop,
    onCardDragStart,
    onDragEnter,
    onCardDragEnd,
    getCardPayload,
  } = useDndKanbanBoard<object>(MOCK_DND_SCENE_V2)

  return (
    <Stack sx={{ flexGrow: 1, py: "16px", overflow: "auto" }}>
      <DndContainer orientation="horizontal">
        <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
          {Object.keys(dataToRender).map((columnId, columnIndex) => (
            <CandidateStageColumn
              key={columnId}
              colors={CANDIDATE_PROCESS[columnIndex].colors}
              name={CANDIDATE_PROCESS[columnIndex].name}
              wrapperCardsSx={{
                maxHeight:
                  activeColumnId === columnId &&
                  dragEnterColumnId !== columnId &&
                  `calc(${CANDIDATE_CARD_HEIGHT}px * ${dataToRender[columnId].length - 1})`,
              }}
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
              >
                {dataToRender[columnId].map((card) => (
                  <DndDraggable key={card.id} sx={{ py: "12px" }}>
                    <CandidateStageColumnCard />
                  </DndDraggable>
                ))}
              </DndContainer>
            </CandidateStageColumn>
          ))}
        </Stack>
      </DndContainer>
    </Stack>
  )
}

export default TheJobCandidatePage
