import { useRecoilState } from "recoil"
import { modalAtom } from "store/modalAtom"
import { MODAL_ID } from "constants/MODAL_ID"

const useModalAtom = () => {
  const [modal, setModal] = useRecoilState<MODAL_ID[]>(modalAtom)

  const pushModal = (modalId: MODAL_ID) => {
    setModal((prevModal) => [...prevModal, modalId])
  }

  const pullModal = (modalId: MODAL_ID) => {
    setModal((prevModal) => prevModal.filter((id) => id !== modalId))
  }

  return { modal, pushModal, pullModal }
}

export default useModalAtom
