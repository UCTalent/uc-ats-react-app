import Chip from "@mui/material/Chip"
import { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
}

const BasicTag: React.FC<TypeProps> = ({ children }) => {
  return <Chip label={children} sx={{ fontSize: "14px", fontWeight: 500 }} />
}

export default BasicTag
