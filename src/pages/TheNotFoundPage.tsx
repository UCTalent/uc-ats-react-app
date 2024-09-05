import { Box, Typography, Button } from "@mui/material"
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
