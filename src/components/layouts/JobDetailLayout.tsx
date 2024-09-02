import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
// import { useTheme } from "@mui/material"
import { AppContainer, Breadcrumbs } from "components/common"
import { TheAppHeader } from "components/sections"
import { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
}

const JobDetailLayout: React.FC<TypeProps> = ({ children }) => {
  // const { palette } = useTheme()

  return (
    <Stack sx={{ height: "100vh", overflow: "auto" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack sx={{ height: "100%" }}>
            <Breadcrumbs />
            <Stack>
              <Typography sx={{ fontWeight: 600, fontSize: "34px" }}>Product Lead</Typography>
              <Stack flexDirection="row">
                <Typography variant="body2">North Las Vegas, USA</Typography>
                <Typography variant="body2">Full time</Typography>
                <Typography variant="body2">4-6 years</Typography>
              </Stack>
            </Stack>
            <Stack sx={{ flexGrow: 1 }}>
              <Stack flexDirection="row">
                <Button variant="text" color="secondary">
                  Candidates
                </Button>
                <Button variant="text" color="secondary">
                  Job Info
                </Button>
                <Button variant="text" color="secondary">
                  Notes
                </Button>
              </Stack>
              {children}
            </Stack>
            <Stack sx={{ minHeight: "40px" }}></Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default JobDetailLayout
