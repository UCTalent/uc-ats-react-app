import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const useScrollToTop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { pathname } = useLocation()

  const scrollToTop = (scrollContainer: HTMLElement | (Window & typeof globalThis)) => {
    scrollContainer.scrollTo({
      top: 0,
      behavior: "auto",
    })
  }

  useEffect(() => {
    if (containerRef.current) {
      scrollToTop(containerRef.current)
      return
    }
    scrollToTop(window)
  }, [pathname, containerRef])

  return { containerRef }
}

export default useScrollToTop
