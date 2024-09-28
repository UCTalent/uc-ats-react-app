import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { confirmAtom } from "store/confirmAtom"
import { IConfirmState } from "types/store/confirm"

const useConfirmAtom = () => {
  const [confirm, setConfirm] = useRecoilState<IConfirmState>(confirmAtom)

  const configConfirm = useCallback(
    (configs: Partial<IConfirmState>) => {
      setConfirm((prevConfirm) => ({ ...prevConfirm, ...configs }))
    },
    [setConfirm]
  )

  const setHandler = useCallback(
    (handler: () => void | Promise<void>) => {
      setConfirm((prevConfirm) => ({
        ...prevConfirm,
        onConfirm: handler,
      }))
    },
    [setConfirm]
  )

  const triggerConfirm = useCallback(() => {
    setConfirm((prevConfirm) => ({
      ...prevConfirm,
      isActive: true,
    }))
  }, [setConfirm])

  const clearConfirm = useCallback(() => {
    setConfirm({
      isActive: false,
      title: "",
      content: "",
      confirmText: "Confirm",
      cancelText: "Cancel",
      onConfirm: () => {},
      onCancel: () => {},
    })
  }, [setConfirm])

  const doHandler = useCallback(async () => {
    await confirm.onConfirm()
    clearConfirm()
  }, [clearConfirm, confirm])

  return { confirm, configConfirm, setHandler, triggerConfirm, doHandler, clearConfirm }
}

export default useConfirmAtom
