import Stack from "@mui/material/Stack"
import useDndKanbanBoard from "hooks/useDndKanbanBoard"
import { DndContainer, DndDraggable } from "components/common/dnd"
import { CandidateStageColumn } from "components/sections/job-detail"
import { CandidateStageColumnCard } from "components/subsections/job-detail"
import { mockDndScene } from "utils/mockDndScene"
import { bindClass } from "utils/bindClass"
import styles from "assets/css/dnd.module.css"

const cx = bindClass(styles)

const TheJobDetailPage = () => {
  const { dataToRender, onCardDrop, getCardPayload } = useDndKanbanBoard<string>(mockDndScene)

  return (
    <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
      <DndContainer>
        <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
          {dataToRender.children.map((column, index) => (
            <CandidateStageColumn key={index}>
              <DndContainer
                groupName="col"
                getChildPayload={(index) => getCardPayload(column.id, index)}
                onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
                dragClass={cx("drag-preview")}
                dropPlaceholder={{
                  showOnTop: true,
                  className: cx("drop-preview"),
                }}
                {...column.props}
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
      <Stack sx={{ minHeight: "40px" }}></Stack>
    </Stack>
  )
}

export default TheJobDetailPage
