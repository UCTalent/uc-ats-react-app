import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { JOBS_STATUS_PARAMS } from "constants/JOB"

const useJobsSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page")
  const status = searchParams.get("status")

  useEffect(() => {
    if (!page || !Number.isInteger(+page) || Number(page) < 1) {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev)
        newParams.set("page", "1")
        return newParams
      })
    }
  }, [page, setSearchParams])

  useEffect(() => {
    if (!status || !Object.values(JOBS_STATUS_PARAMS).includes(status as JOBS_STATUS_PARAMS)) {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev)
        newParams.set("status", JOBS_STATUS_PARAMS.ACTIVE)
        return newParams
      })
    }
  }, [status, setSearchParams])

  const onStartPage = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("page", "1")
      return newParams
    })
  }

  const onNextPage = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("page", String(Number(page) + 1))
      return newParams
    })
  }

  const onPreviousPage = () => {
    if (Number(page) === 1) return
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("page", String(Number(page) - 1))
      return newParams
    })
  }

  const onChangeStatus = (statusName: JOBS_STATUS_PARAMS) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("status", statusName)
      newParams.set("page", "1")
      return newParams
    })
  }

  return { page: Number(page), onNextPage, onPreviousPage, onStartPage, status, onChangeStatus }
}

export default useJobsSearchParams
