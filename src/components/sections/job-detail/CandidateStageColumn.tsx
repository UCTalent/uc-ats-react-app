import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { CandidateStageColumnCard } from "components/subsections/job-detail"
import { MOCK_CANDIDATE_CARD_DATA } from "constants/CANDIDATE_PROCESS"
import { CardDndWrapper } from "modules/candidate-dnd"

interface TypeProps {
  title: string
  colors: string[]
  id: number
}

const CandidateStageColumn: React.FC<TypeProps> = ({ title, colors, id }) => {
  const [textColor, backgroundColor] = colors
  return (
    <Stack
      sx={{
        minWidth: "360px",
        borderRadius: "8px",
        border: "1px solid #EEF2FF",
        py: "16px",
        px: "24px",
        bgcolor: "#F8F7FF",
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <Chip
          label={title}
          size="small"
          sx={{
            width: "fit-content",
            height: "26px",
            mb: "24px",
            px: "10px",
            fontWeight: 600,
            color: textColor,
            bgcolor: backgroundColor,
          }}
        />
        <button style={{ height: "fit-content" }}>Dnd</button>
      </Stack>
      <Stack gap="24px" sx={{ flexGrow: 1 }}>
        {MOCK_CANDIDATE_CARD_DATA[id].map((item) => (
          <CardDndWrapper key={item.id} id={item.id} columnId={id}>
            <CandidateStageColumnCard id={item.id} />
          </CardDndWrapper>
        ))}
      </Stack>
    </Stack>
  )
}

export default CandidateStageColumn
