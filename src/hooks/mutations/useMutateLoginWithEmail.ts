import { ENV_OAUTH } from "constants/ENV_CONFIG"
import { useCallback, useState } from "react"
import AuthAPI from "services/api/auth"
import type { ILoginWithEmailRequest, ILoginWithEmailResponse } from "types/api/auth"

const useMutateLoginWithEmail = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<unknown>({})

  const mutate = useCallback(
    async (
      data: Pick<ILoginWithEmailRequest, "email" | "password">
    ): Promise<ILoginWithEmailResponse> => {
      const { email, password } = data
      setLoading(true)
      try {
        const res = await AuthAPI.loginWithEmail({
          client_id: ENV_OAUTH.appId,
          client_secret: ENV_OAUTH.appSecret,
          grant_type: "password",
          email,
          password,
        })
        return res.data
      } catch (error) {
        setErrors(error)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return {
    mutate,
    loading,
    errors,
  }
}

export default useMutateLoginWithEmail
