import React, { type ReactNode } from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

interface TypeProps {
  children: ReactNode
  name: string
  colors: string[]
}

const CandidateStageColumn: React.FC<TypeProps> = ({ children, name, colors }) => {
  const [color, bgcolor] = colors
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
      <Chip
        label={name}
        size="small"
        sx={{
          width: "fit-content",
          height: "26px",
          mb: "12px",
          px: "10px",
          fontWeight: 600,
          color,
          bgcolor,
        }}
      />
      <Stack gap="24px" sx={{ flexGrow: 1 }}>
        {children}
      </Stack>
    </Stack>
  )
}

export default CandidateStageColumn
