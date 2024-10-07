import { useCallback } from "react"
import Stack from "@mui/material/Stack"
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
  const { mutate: mutateLoginWithEmail } = useMutateLoginWithEmail()
  const { mutate: mutateGetProfileMe } = useMutateGetProfileMe()

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
    <Stack sx={{ gap: "16px", width: "360px", px: "24px", py: "16px", bgcolor: "white" }}>
      <TextField control={control} name="email" label="Email" />
      <PasswordField control={control} name="password" label="Password" />
      <ButtonContained onClick={handleSubmit(login)} type="submit" fullWidth={true}>
        Log In
      </ButtonContained>
    </Stack>
  )
}

export default LoginForm
