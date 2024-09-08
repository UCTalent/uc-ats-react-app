import React, { useMemo } from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CANDIDATE_PROCESS, ICandidate } from "utils/mockSceneDndKit"
import { CandidateStageColumnCard } from "components/subsections/job-detail"
// import { CSS } from "@dnd-kit/utilities"

interface TypeProps {
  column: (typeof CANDIDATE_PROCESS)[number]
  cards: ICandidate[]
  name: string
  colors: string[]
}

const CandidateStageColumn: React.FC<TypeProps> = ({ name, colors, cards, column }) => {
  const [color, bgcolor] = colors

  const cardIds = useMemo(() => cards.map((c) => c.id), [cards])

  const {
    setNodeRef,
    // attributes, listeners, transform, transition, isDragging
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    attributes: {
      roleDescription: `Column: ${column.name}`,
    },
  })

  // const style = {
  //   transition,
  //   transform: CSS.Translate.toString(transform),
  //   opacity: isDragging ? 0.5 : undefined,
  // }

  return (
    <Stack
      ref={setNodeRef}
      // style={style}
      // {...attributes}
      // {...listeners}
      sx={{
        height: "fit-content",
        minHeight: "196px",
        minWidth: "360px",
        borderRadius: "8px",
        border: "1px solid #EEF2FF",
        py: "16px",
        px: "24px",
        bgcolor: "#F8F7FF",
      }}
    >
      <Chip
        label={name}
        size="small"
        sx={{
          width: "fit-content",
          height: "26px",
          mb: "12px",
          px: "10px",
          fontWeight: 600,
          color,
          bgcolor,
        }}
      />
      <Stack gap="24px" sx={{ flexGrow: 1 }}>
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          {cards.map((candidate) => (
            <CandidateStageColumnCard key={candidate.id} task={candidate} />
          ))}
          {/* {cards.length === 0 && <CandidateStageColumnCard task={null} sx={{ opacity: 0 }} />} */}
        </SortableContext>
      </Stack>
    </Stack>
  )
}

export default CandidateStageColumn
