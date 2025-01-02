import useLetterStore from '@/modules/utils/store'
import { Card as UICard, CardHeader, CardDescription } from "@/UI/card"
import trash from '@/modules/assets/trash.svg'
import copy from '@/modules/assets/copy.svg'
import { GeneratedLetterType } from '@/types/types'

function Card({ card }: {card: GeneratedLetterType}) {
  const { deleteLetter } = useLetterStore()
  const { id, text, title, regards } = card;
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert('Текст скопирован в буфер обмена!'),
      (err) => console.error('Ошибка копирования текста:', err)
    );
  };

  return (
    <UICard key={id} className="h-64 w-full p-5">
      <CardHeader className="flex flex-col flex-1 space-y-3">
        <CardDescription className="h-40 overflow-hidden text-ellipsis text-sm text-gray-600">
          {`${title} ${text} ${regards}`}
        </CardDescription>
      </CardHeader>
      <div className="flex gap-2">
        <img
          src={copy}
          alt="Dublicate Icon"
          className="h-5 w-auto cursor-pointer"
          onClick={() => copyToClipboard(`${title} ${text} ${regards}`)}
        />
        <img
          src={trash}
          alt="Remove Icon"
          className="h-5 w-auto cursor-pointer"
          onClick={() => deleteLetter(id)}
        />
      </div>
    </UICard>
  );
}

export default Card
