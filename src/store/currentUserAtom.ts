import { atom } from "recoil"
import type { ICurrentUserState } from "types/store/current-user"

export const currentUserAtom = atom<ICurrentUserState>({
  key: "currentUserState",
  default: {
    isLoggedIn: false,
    userId: "",
    email: "",
    name: "",
    avatar: "",
  },
})
