import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { type ReactNode } from "react"

interface TypeProps {
  title: string
  children: ReactNode
}

const WrapperSectionContent: React.FC<TypeProps> = ({ title, children }) => {
  return (
    <Stack>
      <Typography variant="h5" sx={{ fontSize: "24px !important", fontWeight: "600px", mb: "8px" }}>
        {title}
      </Typography>
      {children}
    </Stack>
  )
}

export default WrapperSectionContent
