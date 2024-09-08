import Stack from "@mui/material/Stack"
import useDndKanbanBoard from "hooks/useDndKanbanBoard"
import { DndContainer, DndDraggable } from "components/common/dnd"
import { CandidateStageColumn } from "components/sections/job-detail"
import { CandidateStageColumnCard } from "components/subsections/job-detail"
import { CANDIDATE_PROCESS, mockDndScene } from "utils/mockDndScene"
import { bindClass } from "utils/bindClass"
import styles from "assets/css/dnd.module.css"

const cx = bindClass(styles)

const TheJobCandidatePage = () => {
  const { dataToRender, onCardDrop, onCardDragStart, onCardDragEnd, getCardPayload } =
    useDndKanbanBoard<string>(mockDndScene)

  return (
    <Stack sx={{ flexGrow: 1, py: "16px", overflow: "auto" }}>
      <DndContainer orientation="horizontal">
        <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
          {dataToRender.children.map((column, columnIndex) => (
            <CandidateStageColumn
              key={column.id}
              name={column.name}
              colors={CANDIDATE_PROCESS[columnIndex].colors}
            >
              <DndContainer
                {...column.props}
                groupName="col"
                getChildPayload={(index) => getCardPayload(column.id, index)}
                onDragStart={onCardDragStart}
                onDragEnd={onCardDragEnd}
                onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
                dragClass={cx("drag-preview")}
                dropPlaceholder={{
                  showOnTop: true,
                  animationDuration: 150,
                  className: cx("drop-preview"),
                }}
              >
                {column.children.map((card) => (
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
