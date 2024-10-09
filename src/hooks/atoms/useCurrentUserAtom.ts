import { useRecoilState } from "recoil"
import { currentUserAtom } from "store/currentUserAtom"
import type { ICurrentUserState } from "types/store/current-user"
import { deleteCookie } from "utils/cookie"

const useCurrentUserAtom = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)

  const setLoggedInUser = (userData: Omit<ICurrentUserState, "isLoggedIn">) => {
    setCurrentUser({ ...userData, isLoggedIn: true })
  }

  const setLogoutUser = () => {
    deleteCookie("access_token")
    deleteCookie("refresh_token")
    setCurrentUser({ isLoggedIn: false, email: "", name: "", userId: "" })
  }

  return { currentUser, setLoggedInUser, setLogoutUser }
}

export default useCurrentUserAtom
