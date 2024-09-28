import { atom } from "recoil"
import { IConfirmState } from "types/store/confirm"

export const confirmAtom = atom<IConfirmState>({
  key: "confirmState",
  default: {
    isActive: false,
    title: "",
    content: "",
    confirmText: "Confirm",
    cancelText: "Cancel",
    onConfirm: () => {},
    onCancel: () => {},
  },
})
