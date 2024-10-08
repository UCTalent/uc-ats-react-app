import useCurrentUserAtom from "hooks/atoms/useCurrentUserAtom"
import { useCallback, useState } from "react"
import { getCookie } from "utils/cookie"
import AuthAPI from "services/api/auth"

const useMutateGetProfileMe = () => {
  const [isFetched, setIsFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<unknown>({})
  const { setLoggedInUser } = useCurrentUserAtom()

  const mutate = useCallback(async () => {
    const accessToken = getCookie("access_token")
    if (!accessToken) return
    setLoading(true)
    try {
      const response = await AuthAPI.getProfileMe()
      if (!response) return
      const { email, name, id } = response.data || {}
      setLoggedInUser({ email, name, userId: id })
      return response
    } catch (error) {
      setErrors(error)
    } finally {
      setLoading(false)
      setIsFetched(true)
    }
  }, [setLoggedInUser])

  return { mutate, loading, errors, isFetched }
}

export default useMutateGetProfileMe
