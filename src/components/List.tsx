import useLetterStore from '@/modules/utils/store'
import Card from '@/components/Card'
import { useModal, ModalStateTypes } from '@/modules/utils/useModal'
import plus from '@/modules/assets/plus.svg'
import { MAX_LETTERS } from '@/constants'

function List() {
  const { generatedLetters } = useLetterStore()
  const modal = useModal() as ModalStateTypes
  const isLimitOver = generatedLetters.length >= MAX_LETTERS

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-7">
      {generatedLetters.map((letter) => (
        <Card key={letter.id} card={letter} />
      ))}
      <div className="h-64 w-full p-5 bg-gray-200 flex justify-center items-center rounded-md shadow-lg">
        <button disabled={isLimitOver} onClick={modal.open} className="flex justify-center items-center bg-gray-200">
          <img
            src={plus}
            alt="Remove Icon"
            className="h-5 w-auto cursor-pointer"
          />
          Create New Letter
        </button>
      </div>
    </div>
  );
}

export default List