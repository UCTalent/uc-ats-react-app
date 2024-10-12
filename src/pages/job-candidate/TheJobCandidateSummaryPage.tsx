import { useParams } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TypographyHtml from "components/common/TypographyHtml"
import BasicTag from "components/common/tags/BasicTag"
import useJobCandidateTalentSummaryQuery from "hooks/queries/useJobCandidateTalentSummaryQuery"

const TheJobCandidateSummaryPage = () => {
  const { candidateId } = useParams()
  const { data } = useJobCandidateTalentSummaryQuery(candidateId)
  const talent = data?.business.talent

  return (
    <>
      <Stack
        gap="12px"
        sx={{ pb: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>{talent?.headline}</Typography>
        <TypographyHtml>{talent?.about}</TypographyHtml>
      </Stack>
      {/* Skills */}
      <Stack
        flexDirection="row"
        sx={{ mt: "24px", pb: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: 600, minWidth: "196px", maxWidth: "196px" }}
        >
          Skills
        </Typography>
        <Stack flexDirection="row" sx={{ gap: "6px", flexWrap: "wrap" }}>
          {talent?.skills.map((skill) => (
            <BasicTag key={skill.name} sx={{ fontWeight: 700 }}>
              {skill.name}
            </BasicTag>
          ))}
        </Stack>
      </Stack>
      {/* Language */}
      <Stack
        flexDirection="row"
        sx={{ mt: "24px", pb: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: 600, minWidth: "196px", maxWidth: "196px" }}
        >
          Language
        </Typography>
        <Stack flexDirection="row" sx={{ gap: "6px", flexWrap: "wrap" }}>
          {/* {TAGS.map((tag) => (
            <BasicTag key={tag.id} sx={{ fontWeight: 700 }}>
              {tag.title}
            </BasicTag>
          ))} */}
        </Stack>
      </Stack>
    </>
  )
}

export default TheJobCandidateSummaryPage
