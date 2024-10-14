import { atom, selector } from "recoil"
import { IAlertState } from "types/store/alert"

export const alertAtom = atom<IAlertState>({
  key: "alertState",
  default: {
    open: false,
    type: "success",
    title: "",
    message: "",
    duration: 2000,
    anchorOrigin: { vertical: "top", horizontal: "right" },
  },
})

export const showAlertState = selector({
  key: "showAlert",
  get: ({ get }) => {
    const alertState = get(alertAtom)
    return alertState
  },
  set: ({ get, set }, newState: IAlertState) => {
    const alertState = get(alertAtom)
    set(alertAtom, { ...alertState, ...newState, open: true })
  },
})

export const closeAlertState = selector({
  key: "closeAlert",
  get: ({ get }) => {
    const alertState = get(alertAtom)
    return alertState
  },
  set: ({ set, get }) => {
    const alertState = get(alertAtom)
    set(alertAtom, {
      ...alertState,
      ...{
        open: false,
        message: "",
      },
    })
  },
})
