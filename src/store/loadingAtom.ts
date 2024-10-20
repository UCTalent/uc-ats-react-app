import { atom, selector } from "recoil"
import { ILoadingSate } from "types/store/loading"

export const loadingAtom = atom<ILoadingSate>({
  key: "loadingState",
  default: {
    loading: false,
  },
})

export const showLoadingState = selector({
  key: "showLoading",
  get: ({ get }) => {
    const loadingState = get(loadingAtom)
    return loadingState
  },
  set: ({ set }) => {
    set(loadingAtom, { loading: true })
  },
})

export const hideLoadingState = selector({
  key: "hideLoading",
  get: ({ get }) => {
    const loadingState = get(loadingAtom)
    return loadingState
  },
  set: ({ set }) => {
    set(loadingAtom, { loading: false })
  },
})
