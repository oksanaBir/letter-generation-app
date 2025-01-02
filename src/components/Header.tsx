import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Progress } from '@/UI/progress'
import useLetterStore from '@/modules/utils/store'
import logo from '@/modules/assets/logo.svg'

function Header() {
  const { generatedLetters } = useLetterStore()
  const [progress, setProgress] = useState<number>(0)
  const navigate = useNavigate()

  const maxLetters = 5

  useEffect(() => {
    const currentProgress = (generatedLetters.length / maxLetters) * 100
    setProgress(currentProgress)
  }, [generatedLetters])

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6 bg-gray-50 dark:bg-gray-800 shadow-sm">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Code Logo"
          className="h-8 w-auto cursor-pointer"
          onClick={() => navigate('/home')}
        />
      </div>
      <div className="flex flex-col items-end">
        <Progress value={progress} className=" max-w-lg" />
        
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {`${generatedLetters.length} / ${maxLetters} applications generated`}
        </span>
      </div>
    </header>
  );
}

export default Header
