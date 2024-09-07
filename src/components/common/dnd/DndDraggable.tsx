import Box from "@mui/material/Box"
import { Draggable as SmoothDraggable } from "react-smooth-dnd"
import { type ReactNode } from "react"
import { type SxProps } from "@mui/material"

interface TypeProps {
  children: ReactNode
  sx?: SxProps
}

const DndDraggable: React.FC<TypeProps> = ({ children, sx }) => {
  return <SmoothDraggable render={() => <Box sx={sx}>{children}</Box>}/>
}

export default DndDraggable
