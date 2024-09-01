import { useEffect, useState } from "react"

const useDebounce = <T>(value: T, delay: number = 400) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handlerTimeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handlerTimeout)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
