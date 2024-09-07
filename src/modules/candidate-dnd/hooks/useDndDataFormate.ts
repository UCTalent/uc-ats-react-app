import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { formatCardsDataGroupByColumn } from "services/candidate-dnd"
import { candidateCardAtom } from "store/candidateAtom"

const useDndDataFormate = () => {
  const [cards, setCards] = useRecoilState(candidateCardAtom)

  useEffect(() => {
    const formattedCards = formatCardsDataGroupByColumn()
    setCards(formattedCards)
  }, [setCards])

  return { cards }
}
export default useDndDataFormate
