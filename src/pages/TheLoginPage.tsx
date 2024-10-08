import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PublicRoute from "components/common/PublicRoute"
import LoginForm from "components/forms/LoginForm"
import BgTalent from "assets/images/bg-talent.webp"
import LogoUCT from "assets/logos/uctalent-text.png"

const TheLoginPage = () => {
  return (
    <PublicRoute>
      <Stack
        flexDirection="row"
        sx={{
          width: "100%",
          height: "100vh",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <img
            src={BgTalent}
            alt="Talent"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Stack
          sx={{
            flexBasis: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box sx={{ my: "32px" }}>
            <img src={LogoUCT} alt="UCTalent" width="224px" />
          </Box>
          <Stack
            sx={{
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <LoginForm />
          </Stack>
          <Typography sx={{ mb: "32px", width: "560px", color: "text.secondary" }}>
            UCTalent leverages cutting-edge AI, smart contract on blockchain for referral reward,
            and a user-owned approach to revolutionize hiring for businesses and empower talent to
            shape their careers.
          </Typography>
        </Stack>
      </Stack>
    </PublicRoute>
  )
}

export default TheLoginPage
