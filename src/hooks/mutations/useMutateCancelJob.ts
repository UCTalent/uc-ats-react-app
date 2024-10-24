import { useCallback, useState } from "react"
import { JobAPI } from "services/api/job"
import { CloseJobRequest } from "types/api/job"

const useMutateCancelJob = () => {
  const [isFetched, setIsFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<unknown>(null)

  const mutate = useCallback(async (idJob: string, request: CloseJobRequest) => {
    setLoading(true)
    try {
      const response = await JobAPI.cancelJob(idJob, request)
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

export default useMutateCancelJob
