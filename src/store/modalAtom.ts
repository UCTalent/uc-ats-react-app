import { atom } from "recoil"
import { MODAL_ID } from "constants/MODAL_ID"

export const modalAtom = atom<MODAL_ID[]>({
  key: "modalAtom",
  default: [],
})
