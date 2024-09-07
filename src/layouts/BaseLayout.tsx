import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { AppContainer } from "components/common"
import { TheAppHeader } from "components/sections"
import { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
}

const BaseLayout: React.FC<TypeProps> = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh", overflow: "scroll" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>{children}</AppContainer>
      </Box>
    </Stack>
  )
}

export default BaseLayout
