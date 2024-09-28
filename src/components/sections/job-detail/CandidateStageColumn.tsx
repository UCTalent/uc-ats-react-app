import React, { memo, type ReactNode } from "react"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import { type SxProps } from "@mui/material"

interface TypeProps {
  children: ReactNode
  name: string
  colors: string[]
  columnLength: number
  wrapperCardsSx?: SxProps
}

const CandidateStageColumn: React.FC<TypeProps> = ({
  children,
  name,
  colors,
  columnLength,
  wrapperCardsSx,
}) => {
  const [color] = colors

  return (
    <Stack
      sx={{
        height: "fit-content",
        minHeight: "220px",
        minWidth: "360px",
        borderRadius: "8px",
        border: "1px solid #EEF2FF",
        py: "16px",
        px: "24px",
        bgcolor: "#F8F7FF",
      }}
    >
      <Stack flexDirection="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
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
      <Stack gap="24px" sx={{ flexGrow: 1, overflow: "hidden", ...wrapperCardsSx }}>
        {children}
      </Stack>
    </Stack>
  )
}

export default memo(CandidateStageColumn)
