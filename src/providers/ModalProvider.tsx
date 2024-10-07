import { useCallback } from "react"
import ModalWithHeader from "components/common/ModalWithHeader"
import useModalAtom from "hooks/atoms/useModalAtom"
import LoginForm from "components/forms/LoginForm"
import { MODAL_ID } from "constants/MODAL_ID"

const ModalProvider = () => {
  const { modal, pullModal } = useModalAtom()
  const isActive = useCallback((modalId: MODAL_ID) => modal.includes(modalId), [modal])

  return (
    <>
      {isActive(MODAL_ID.LOGIN) && (
        <ModalWithHeader title="Login" open onClose={() => pullModal(MODAL_ID.LOGIN)}>
          <LoginForm />
        </ModalWithHeader>
      )}
    </>
  )
}

export default ModalProvider
