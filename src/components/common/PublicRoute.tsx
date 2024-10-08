import useCurrentUserAtom from "hooks/atoms/useCurrentUserAtom"
import { FC, ReactNode, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface IProps {
  children: ReactNode
}

const PublicRoute: FC<IProps> = ({ children }) => {
  const [shouldRender, setShouldRender] = useState(false)
  const { currentUser } = useCurrentUserAtom()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!currentUser) {
      return
    }

    if (currentUser.isLoggedIn) {
      if (pathname === "/login") {
        navigate("/")
      }
      return
    }
    setShouldRender(true)
  }, [currentUser, navigate, pathname])

  if (!shouldRender) return null

  return <>{children}</>
}

export default PublicRoute
