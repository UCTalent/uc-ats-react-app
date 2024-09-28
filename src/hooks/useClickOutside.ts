import { useEffect, useRef, RefObject } from "react"

const useClickOutside = (callback: () => void, externalRef?: RefObject<HTMLDivElement>) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (externalRef?.current) {
      elementRef.current = externalRef.current
    }
  }, [externalRef])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [callback, elementRef])

  return { ref: elementRef }
}

export default useClickOutside
