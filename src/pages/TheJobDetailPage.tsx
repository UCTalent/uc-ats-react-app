import Stack from "@mui/material/Stack"
import { CandidateStageColumn } from "components/sections/job-detail"

const TheJobDetailPage = () => {
  return (
    <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
      <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
        {Array.from({ length: 12 }).map((item, index) => (
          <CandidateStageColumn key={index} />
        ))}
      </Stack>
      <Stack sx={{ minHeight: "40px" }}></Stack>
    </Stack>
  )
}

export default TheJobDetailPage
