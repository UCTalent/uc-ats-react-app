import Chip from "@mui/material/Chip"
import { type ReactNode } from "react"
import { type SxProps } from "@mui/material"

interface TypeProps {
  children: ReactNode
  sx?: SxProps
}

const BasicTag: React.FC<TypeProps> = ({ children, sx }) => {
  return <Chip label={children} sx={{ fontSize: "14px", fontWeight: 500, ...sx }} />
}

export default BasicTag
