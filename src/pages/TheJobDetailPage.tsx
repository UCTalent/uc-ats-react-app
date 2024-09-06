import Stack from "@mui/material/Stack"
import { CandidateStageColumn } from "components/sections/job-detail"
import { CANDIDATE_PROCESS, MOCK_CANDIDATE_CARD_DATA } from "constants/CANDIDATE_PROCESS"
import { BoardDndWrapper, ColumnDndWrapper } from "modules/candidate-dnd"

const TheJobDetailPage = () => {
  return (
    <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
      <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
        <BoardDndWrapper>
          {CANDIDATE_PROCESS.map((column) => (
            <ColumnDndWrapper
              id={column.id}
              cards={MOCK_CANDIDATE_CARD_DATA[column.id]}
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
