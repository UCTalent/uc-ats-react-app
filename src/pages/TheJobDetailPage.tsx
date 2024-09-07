import Stack from "@mui/material/Stack"
import { CandidateStageColumn } from "components/sections/job-detail"
import { CANDIDATE_PROCESS } from "constants/CANDIDATE_PROCESS"
import { BoardDndWrapper, ColumnDndWrapper } from "modules/candidate-dnd"
import { useDndDataFormate } from "modules/candidate-dnd/hooks"

const TheJobDetailPage = () => {
  const { cards: dataCards } = useDndDataFormate()
  if (!dataCards) return null
  return (
    <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
      <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
        <BoardDndWrapper>
          {CANDIDATE_PROCESS.map((column) => (
            <ColumnDndWrapper
              id={column.id}
              cards={dataCards[column.id]}
              columnData={CANDIDATE_PROCESS.find((c) => c.id === column.id)}
            >
              <CandidateStageColumn
                key={column.id}
                title={column.name}
                colors={column.colors}
                id={column.id}
              />
            </ColumnDndWrapper>
          ))}
        </BoardDndWrapper>
      </Stack>
      <Stack sx={{ minHeight: "40px" }}></Stack>
    </Stack>
  )
}

export default TheJobDetailPage
