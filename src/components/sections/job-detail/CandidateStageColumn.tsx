import { memo, useEffect, useRef, type ReactNode } from "react"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import { APP_HEADER_HEIGHT, CANDIDATE_CARD_HEIGHT } from "constants/STYLE"
import { type SxProps } from "@mui/material"

interface TypeProps {
  children: ReactNode
  name: string
  colors: string[]
  columnLength: number
  columnHtmlId: string
  isDragOver: boolean
  wrapperCardsSx?: SxProps
}

const CandidateStageColumn: React.FC<TypeProps> = ({
  children,
  name,
  colors,
  columnLength,
  columnHtmlId,
  isDragOver,
  wrapperCardsSx,
}) => {
  const [color] = colors
  const parentElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (columnLength > 0) {
      if (!parentElement.current) return
      const dndContainer = parentElement.current.querySelector(
        ".smooth-dnd-container.vertical"
      ) as HTMLElement
      if (!dndContainer) return
      const containerHeight = Math.max(
        columnLength * CANDIDATE_CARD_HEIGHT,
        dndContainer.parentElement.offsetHeight
      )
      dndContainer.style.minHeight = `${containerHeight}px`
    }
  }, [columnLength, parentElement])

  return (
    <Stack
      id={columnHtmlId}
      sx={{
        maxHeight: `calc(100vh - ${APP_HEADER_HEIGHT}px - 84px - 12px - 20px - 48px - 8px - 12px * 2 - 1px - 1px - 8px)`,
        minWidth: "360px",
        borderRadius: "8px",
        border: "1px solid #EEF2FF",
        bgcolor: "#F8F7FF",
        overflow: "hidden",
        pointerEvents: isDragOver && "none",
      }}
    >
      <Stack
        flexDirection="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "52px",
          px: "24px",
          borderBottom: "1px solid",
          borderBottomColor: "border.outlined",
        }}
      >
        <Typography sx={{ color, fontWeight: 600, fontSize: "16px" }}>{name}</Typography>
        <Chip
          label={columnLength}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            fontSize: "14px",
            bgcolor: color,
            color: "white",
            "& .MuiChip-label": {
              paddingLeft: 0,
              paddingRight: 0,
            },
          }}
        />
      </Stack>
      <Stack
        ref={parentElement}
        gap="24px"
        sx={{
          flexGrow: 1,
          px: "24px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(18, 22, 25, 0.04)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(18, 22, 25, 0.1)",
            borderRadius: "999px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(18, 22, 25, 0.3)",
          },
          ...wrapperCardsSx,
        }}
      >
        {children}
      </Stack>
    </Stack>
  )
}

export default memo(CandidateStageColumn)
