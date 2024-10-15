import Stack from "@mui/material/Stack"
import { useParams } from "react-router-dom"
import PdfViewer from "components/common/PdfViewer"
import useJobCandidateTalentResumeQuery from "hooks/queries/useJobCandidateTalentResumeQuery"

const TheJobCandidateResumePage = () => {
  const { candidateId } = useParams()
  const { data } = useJobCandidateTalentResumeQuery(candidateId)

  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <PdfViewer pdfUrl={data.business.jobApply.uploadedResume.resumeUrl} />
    </Stack>
  )
}

export default TheJobCandidateResumePage
