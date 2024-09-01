import { useCallback } from "react"
import { ModalWithHeader } from "components/common"
import { useModalAtom } from "hooks/atoms"
import { PostJobForm } from "components/forms"
import { MODAL_ID } from "constants/MODAL_ID"

const ModalProvider = () => {
  const { modal, pullModal } = useModalAtom()
  const isActive = useCallback((modalId: MODAL_ID) => modal.includes(modalId), [modal])

  return (
    <>
      {isActive(MODAL_ID.POST_JOB) && (
        <ModalWithHeader
          title="Create Job"
          description="A job represents a new  opening, an open position or a vacancy listing. Creating a job will allow you  to add candidates to that job and advertise it on your career page and job boards"
          wrapperSx={{ minWidth: "796px", maxWidth: "796px", minHeight: "300px" }}
          open={isActive(MODAL_ID.POST_JOB)}
          onClose={() => pullModal(MODAL_ID.POST_JOB)}
        >
          <PostJobForm />
        </ModalWithHeader>
      )}
    </>
  )
}

export default ModalProvider
