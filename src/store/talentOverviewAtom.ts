import { atom } from "recoil"
import { ITalentOverviewState } from "types/store/talent-overview"

export const talentOverviewAtom = atom<ITalentOverviewState | null>({
  key: "talentOverviewState",
  default: null,
  // default: {
  //   id: "",
  //   title: "",
  //   place: "",
  //   jobType: "",
  //   exp: "",
  //   salary: "",
  //   isRemote: false,
  // },
})
