import { useState, useEffect } from 'react'
import { Progress } from '@/UI/progress'
import useLetterStore from '@/modules/utils/store'
import { MAX_LETTERS } from '@/constants'

function Status() {
  const { generatedLetters } = useLetterStore()
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const currentProgress = (generatedLetters.length / MAX_LETTERS) * 100;
    setProgress(currentProgress);
  }, [generatedLetters])

  return (
      <div>
        <Progress value={progress} className=" max-w-lg" />
        
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {`${generatedLetters.length} / ${MAX_LETTERS} applications generated`}
        </span>
      </div>
  );
}

export default Status
