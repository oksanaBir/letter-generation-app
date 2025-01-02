import useLetterStore from '@/modules/utils/store'

function ResultForm() {
  const { currentLetter } = useLetterStore()
  return (
    <div className="w-1/2 p-8">
      {currentLetter ? (
        <>
          <h3>{currentLetter.title}</h3>
          <p>{currentLetter.text}</p><br/>
          <p>{currentLetter.regards}</p>
        </>
      ) : (
        <p>Your letter will be here after you fill out the form.</p>
      )}
    </div>
  );
}

export default ResultForm
