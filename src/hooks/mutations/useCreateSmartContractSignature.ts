import { useCallback, useState } from "react"
import { JobAPI } from "services/api/job"
import { CreateSmartContractSignatureRequest } from "types/api/job"

const useCreateSmartContractSignature = () => {
  const [isFetched, setIsFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<unknown>(null)

  const mutate = useCallback(async (request: CreateSmartContractSignatureRequest) => {
    setLoading(true)
    try {
      const response = await JobAPI.createSmartContractSignature(request)
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

export default useCreateSmartContractSignature
