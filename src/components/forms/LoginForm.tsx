import { useCallback } from "react"
import Stack from "@mui/material/Stack"
import TextField from "components/common/form-fields/TextField"
import PasswordField from "components/common/form-fields/PasswordField"
import ButtonContained from "components/common/buttons/ButtonContained"
import { useForm } from "react-hook-form"
import { schemaLoginForm } from "services/schema/formLogin"
import resolver from "services/schema/resolver"
import type { TypeLoginForm } from "types/forms/login"

const LoginForm = () => {
  const { control, handleSubmit } = useForm<TypeLoginForm>({
    resolver: resolver(schemaLoginForm),
    values: { email: "", password: "" },
  })

  const login = useCallback((values: TypeLoginForm) => {
    console.log(values)
  }, [])

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
