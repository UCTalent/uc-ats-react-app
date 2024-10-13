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
    if (!accessToken) return setIsFetched(true)

    setLoading(true)
    try {
      const response = await AuthAPI.getProfileMe()
      if (!response) return
      const { email, name, id, profile_picture } = response.data || {}
      setLoggedInUser({ userId: id, email, name, avatar: profile_picture?.url })
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
