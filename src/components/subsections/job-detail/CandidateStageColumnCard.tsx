import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { IconSVG, UserAvatar, BeautifulColorTag } from "components/common"
import { IconThunder, IconThreeDotsVertical } from "assets/icons"
import { useSortable } from "@dnd-kit/sortable"
import { ICandidate } from "utils/mockSceneDndKit"
import { CSS } from "@dnd-kit/utilities"
import { SxProps } from "@mui/material"

interface TypeProps {
  task: ICandidate
  sx?: SxProps
}

const CandidateStageColumnCard: React.FC<TypeProps> = ({ task, sx }) => {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    attributes: {
      roleDescription: "Task",
    },
  })

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
  }
  return (
    <Stack
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        position: "relative",
        justifyContent: "space-between",
        minWidth: "100%",
        minHeight: "124px",
        p: "16px",
        bgcolor: "#FFFFFF",
        borderRadius: "8px",
        cursor: "grab",
        ...sx,
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <UserAvatar />
        <Box sx={{ cursor: "pointer" }}>
          <IconSVG src={IconThreeDotsVertical} alt="setting" width="16px" height="16px" />
        </Box>
      </Stack>
      <Stack flexDirection="row" justifyContent="end">
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <IconSVG src={IconThunder} alt="location" width="20px" height="20px" />
          <Typography>2min</Typography>
        </Stack>
      </Stack>
      <BeautifulColorTag
        label="55%"
        color="yellow"
        sx={{ position: "absolute", left: 0, top: "50%" }}
      />
    </Stack>
  )
}

export default CandidateStageColumnCard
