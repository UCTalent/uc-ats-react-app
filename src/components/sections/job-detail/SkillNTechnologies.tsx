import { Typography } from "@mui/material"
import { BasicTag } from "components/common"
import Stack from "@mui/material/Stack"

const TAGS = [
  { id: "1", title: "Javascript" },
  { id: "2", title: "React" },
  { id: "3", title: "Node.js" },
  { id: "4", title: "Express" },
  { id: "5", title: "MongoDB" },
  { id: "6", title: "PostgreSQL" },
  { id: "7", title: "MySQL" },
  { id: "8", title: "Redis" },
]

const SkillNTechnologies = () => {
  return (
    <Stack>
      <Typography variant="h5" sx={{ fontSize: "24px !important", fontWeight: "600px" }}>
        Skills & Technologies
      </Typography>
      <Stack flexDirection="row" sx={{ mt: "8px", gap: "6px", flexWrap: "wrap" }}>
        {TAGS.map((tag) => (
          <BasicTag key={tag.id}>{tag.title}</BasicTag>
        ))}
      </Stack>
    </Stack>
  )
}

export default SkillNTechnologies
