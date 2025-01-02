import { useEffect, useRef } from 'react'
import { useClickAway } from 'react-use'
import { useModal, ModalStateTypes } from '@/modules/utils/useModal'
import useLetterStore from '@/modules/utils/store'
import CreateForm from '@/components/CreateForm'
import ResultForm from '@/components/ResultForm'
import cross from '@/modules/assets/cross.svg'

function AddLetterModal() {
  const modal = useModal() as ModalStateTypes; 
  const modalRef = useRef<HTMLDialogElement | null>(null);
    const modalContentRef = useRef<HTMLDivElement | null>(null);

  const { clearLastGeneratedLetter } = useLetterStore()

  useEffect(() => {
    if (!modalRef.current) return;

    if (modal.isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [modal.isOpen])

  useClickAway(modalContentRef, modal.close)

  if (!modal.isOpen) return null;

  return (
    <dialog ref={modalRef} className="rounded-md p-0 w-2/3">
      <div
        ref={modalContentRef}
        className="p-6 flex items-center gap-6"
      >
        <CreateForm />
        <ResultForm />
        <img
          src={cross}
          alt="Close Icon"
          className="h-8 w-auto cursor-pointer absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 -white"
          onClick={() => {
            modal.close()
            clearLastGeneratedLetter()
          }}
        />
      </div>
    </dialog>
  );
}

export default AddLetterModal