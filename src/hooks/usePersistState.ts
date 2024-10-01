import { useState, useEffect, type SetStateAction, type Dispatch } from "react"

const usePersistState = <T>(key: string, initialValue?: T): [T, Dispatch<SetStateAction<T>>] => {
  const storageKey = `uc-ats-${key}`
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(storageKey)
      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (error) {
      console.error("Error parsing JSON:", error)
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [storageKey, value])

  return [value, setValue]
}

export default usePersistState
