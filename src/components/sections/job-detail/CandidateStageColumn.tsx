import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { CandidateStageColumnCard } from "components/subsections/job-detail"

const CandidateStageColumn = () => {
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
      <Chip
        label="New Application"
        size="small"
        sx={{
          width: "fit-content",
          height: "26px",
          mb: "24px",
          px: "10px",
          fontWeight: 600,
          color: "#FF6E40",
          bgcolor: "#FFF9F2",
        }}
      />
      <Stack gap="24px" sx={{ flexGrow: 1, overflow: "auto" }}>
        {Array.from({ length: 6 }).map((item, index) => (
          <CandidateStageColumnCard key={index} />
        ))}
      </Stack>
    </Stack>
  )
}

export default CandidateStageColumn
