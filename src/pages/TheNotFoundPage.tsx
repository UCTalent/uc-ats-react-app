import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"

const TheNotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Typography onClick={() => navigate("/")}>Not Found</Typography>
      <Button> Back Home</Button>
    </Box>
  )
}

export default TheNotFoundPage
