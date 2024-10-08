import { useCallback } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "components/common/form-fields/TextField"
import PasswordField from "components/common/form-fields/PasswordField"
import ButtonContained from "components/common/buttons/ButtonContained"
import useMutateLoginWithEmail from "hooks/mutations/useMutateLoginWithEmail"
import useMutateGetProfileMe from "hooks/mutations/useMutateGetProfileMe"
import { useForm } from "react-hook-form"
import { schemaLoginForm } from "services/schema/formLogin"
import resolver from "services/schema/resolver"
import { setCookie } from "utils/cookie"
import type { TypeLoginForm } from "types/forms/login"

const LoginForm = () => {
  const { control, handleSubmit } = useForm<TypeLoginForm>({
    resolver: resolver(schemaLoginForm),
    values: { email: "", password: "" },
  })
  const { mutate: mutateLoginWithEmail, loading: loadingGetToken } = useMutateLoginWithEmail()
  const { mutate: mutateGetProfileMe, loading: loadingGetProfile } = useMutateGetProfileMe()

  const login = useCallback(
    async (values: TypeLoginForm) => {
      const response = await mutateLoginWithEmail(values)
      if (!response) return
      const { access_token, refresh_token, expires_in } = response
      setCookie("access_token", JSON.stringify(access_token), expires_in)
      setCookie("refresh_token", JSON.stringify(refresh_token), expires_in)
      mutateGetProfileMe()
    },
    [mutateGetProfileMe, mutateLoginWithEmail]
  )

  return (
    <form onSubmit={handleSubmit(login)}>
      <Stack
        sx={{
          alignItems: "center",
          gap: "16px",
          width: "360px",
          px: "24px",
          py: "16px",
          bgcolor: "white",
        }}
      >
        <Typography variant="h5" sx={{ mb: "16px" }}>
          Login
        </Typography>
        <TextField control={control} name="email" label="Email" />
        <PasswordField control={control} name="password" label="Password" />
        <ButtonContained type="submit" fullWidth disabled={loadingGetToken || loadingGetProfile}>
          Log In
        </ButtonContained>
      </Stack>
    </form>
  )
}

export default LoginForm
