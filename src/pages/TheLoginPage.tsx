import { Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import PublicRoute from "components/common/PublicRoute"
import LoginForm from "components/forms/LoginForm"

const TheLoginPage = () => {
  return (
    <PublicRoute>
      <Stack
        sx={{ width: "100%", height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h5" sx={{ mb: "16px" }}>
          Login
        </Typography>
        <LoginForm />
      </Stack>
    </PublicRoute>
  )
}

export default TheLoginPage
