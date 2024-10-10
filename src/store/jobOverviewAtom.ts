import { atom } from "recoil"
import { IJobOverviewState } from "types/store/job-overview"

export const jobOverviewAtom = atom<IJobOverviewState | null>({
  key: "jobOverviewState",
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
