import { Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import LoginForm from "components/forms/LoginForm"
import useCurrentUserAtom from "hooks/atoms/useCurrentUserAtom"

const TheLoginPage = () => {
  const { currentUser } = useCurrentUserAtom()

  if (currentUser.isLoggedIn) {
    window.location.href = "/"
  }

  return (
    <Stack sx={{ width: "100%", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h5" sx={{ mb: "16px" }}>
        Login
      </Typography>
      <LoginForm />
    </Stack>
  )
}

export default TheLoginPage
