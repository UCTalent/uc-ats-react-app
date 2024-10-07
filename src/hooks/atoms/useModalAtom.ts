import { useRecoilState } from "recoil"
import { modalAtom } from "store/modalAtom"
import { MODAL_ID } from "constants/MODAL_ID"

const useModalAtom = () => {
  const [modal, setModal] = useRecoilState<MODAL_ID[]>(modalAtom)

  const pushModal = (modalId: MODAL_ID) => {
    setModal((prevModal) => [...prevModal, modalId])
  }

  const replaceModal = (modalId: MODAL_ID) => {
    setModal([modalId])
  }

  const pullModal = (modalId: MODAL_ID) => {
    setModal((prevModal) => prevModal.filter((id) => id !== modalId))
  }

  return { modal, pushModal, replaceModal, pullModal }
}

export default useModalAtom
