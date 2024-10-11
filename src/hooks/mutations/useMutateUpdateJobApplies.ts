import { useCallback, useState } from "react"
import { JobAPI } from "services/api/job"
import { JobAppliesRequest } from "types/api/job"

const useMutateUpdateJobApplies = () => {
  const [isFetched, setIsFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<unknown>({})

  const mutate = useCallback(async (idJobApplies: string, body: JobAppliesRequest) => {
    setLoading(true)
    try {
      const response = await JobAPI.updateJobApplies(idJobApplies, body)
      if (!response) return
      return response
    } catch (error) {
      setErrors(error)
    } finally {
      setLoading(false)
      setIsFetched(true)
    }
  }, [])

  return { mutate, loading, errors, isFetched }
}

export default useMutateUpdateJobApplies
