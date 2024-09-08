import Box from "@mui/material/Box"
import { constants } from "smooth-dnd"
import { type SxProps } from "@mui/material"
import { type ReactNode } from "react"

const { wrapperClass } = constants

export interface TypeProps {
  children: ReactNode
  sx?: SxProps
}

const DndDraggable: React.FC<TypeProps> = ({ children, sx, ...props }) => {
  return (
    <Box component="div" {...props} sx={{ cursor: "grab", ...sx }} className={wrapperClass}>
      {children}
    </Box>
  )
}

export default DndDraggable
