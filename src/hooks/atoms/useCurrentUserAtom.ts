import { useRecoilState } from "recoil"
import { currentUserAtom } from "store/currentUserAtom"
import type { ICurrentUserState } from "types/store/current-user"

const useCurrentUserAtom = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)

  const setLoggedInUser = (userData: Omit<ICurrentUserState, "isLoggedIn">) => {
    setCurrentUser({ ...userData, isLoggedIn: true })
  }

  return { currentUser, setLoggedInUser }
}

export default useCurrentUserAtom
