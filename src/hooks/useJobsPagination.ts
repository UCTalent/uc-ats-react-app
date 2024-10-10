import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const useJobsPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page")

  useEffect(() => {
    if (!page || !Number.isInteger(+page) || Number(page) < 1) {
      setSearchParams({ page: "1" })
    }
  }, [page, setSearchParams])

  const onNextPage = () => {
    setSearchParams({ page: String(Number(page) + 1) })
  }

  const onPreviousPage = () => {
    if (Number(page) === 1) return
    setSearchParams({ page: String(Number(page) - 1) })
  }

  return { page: Number(page), onNextPage, onPreviousPage }
}

export default useJobsPagination
