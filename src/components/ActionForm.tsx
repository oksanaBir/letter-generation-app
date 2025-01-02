import plus from '@/modules/assets/plus.svg'
import Status from '@/components/Status'
import useLetterStore from '@/modules/utils/store'
import { useModal, ModalStateTypes } from '@/modules/utils/useModal'
import { MAX_LETTERS } from '@/constants'

function ActionForm() {
  const modal = useModal() as ModalStateTypes
  const { generatedLetters } = useLetterStore()
  const isLimitOver = generatedLetters.length >= MAX_LETTERS

  return (
    <div className="flex justify-center">
    <div className="static mb-12 w-2/3 p-6 bg-white shadow-lg rounded-t-lg flex flex-col items-center border-2 border-slate-700">
      <button disabled={isLimitOver} onClick={modal.open} className="flex justify-center items-center mb-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        <img
          src={plus}
          alt="Open Modal"
          className="h-16 w-16"
        />
      </button>
      <p className="text-xl font-semibold mb-6">Create New Letter</p>
      <Status />
    </div>
    </div>
  )
}

export default ActionForm
