import { useEffect, useState } from "react"
import { type DragEndEvent, type DragOverEvent, type DragStartEvent } from "@dnd-kit/core"
import type { IActiveDraggingItemData } from "../types"
// import { CANDIDATE_PROCESS, MOCK_CANDIDATE_CARD_DATA } from "constants/CANDIDATE_PROCESS"
import { useRecoilState } from "recoil"
import { candidateCardAtom } from "store/candidateAtom"
import { cloneDeep } from "@apollo/client/utilities"

const useDndController = () => {
  const [cards, setCards] = useRecoilState(candidateCardAtom)
  const [activeDragItemData, setActiveDragItemData] = useState<IActiveDraggingItemData | null>(null)
  const [overColumnId, setOverColumnId] = useState<string | null>(null)
  const [overCardIndex, setOverCardIndex] = useState<number | null>(null)
  // const [isSingleColumnCardDraggable, setIsSingleColumnCardDraggable] = useState<boolean>(false)
  // const [isMultiColumnsCardDraggable, setIsMultiColumnsCardDraggable] = useState<boolean>(false)

  const handleDragStart = (e: DragStartEvent) => {
    setActiveDragItemData(e.active.data.current as IActiveDraggingItemData)
    // setActiveDragItemType(
    //   e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.COLUMN : ACTIVE_DRAG_ITEM_TYPE.CARD
    // )
    // setActiveDragItemData(e?.active?.data?.current)
  }

  const handleDragOver = (e: DragOverEvent) => {
    console.log("🚀 ~ handleDragOver ~ e:", e)
    if (activeDragItemData?.type === "column") return
    const { active, over } = e
    if (!active || !over) return

    const {
      id: overCardId,
      data: { current: overDraggingCardData },
    } = over

    // const overColumnId = CANDIDATE_PROCESS.find((c) =>
    //   MOCK_CANDIDATE_CARD_DATA[c.id].some((card) => card.id === overCardId)
    // )?.id

    const overColumnId = overDraggingCardData.columnId

    const overCardIndex = overDraggingCardData?.cardIndex
    const cardsLength = overDraggingCardData?.cardsLength
    const isBelowOverItem =
      active.rect.current.translated &&
      active.rect.current.translated.top > over.rect.top + over.rect.height
    const modifier = isBelowOverItem ? 1 : 0
    const newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : cardsLength + 1
    // console.log(newCardIndex)
    setOverColumnId(overColumnId)
    setOverCardIndex(newCardIndex)

    console.log(overColumnId)
  }

  const handleDragEnd = (e: DragEndEvent) => {
    console.log("🚀 ~ handleDragEnd ~ e:", e)
  }

  useEffect(() => {
    console.log(overColumnId, overCardIndex);
    if (!activeDragItemData || !overColumnId || !overCardIndex) return
    setCards((prevCards) => {
      const newCards = cloneDeep(prevCards)
      console.log("overColumnId", overColumnId)
      newCards[overColumnId].splice(overCardIndex, 0, {
        id: activeDragItemData.id,
        title: "ApolloWrapper",
      })
      return newCards
    })
  }, [activeDragItemData])

  return {
    // isDndMultipleColumns,
    // setDndMultipleColumns,
    isColumnDraggable: activeDragItemData?.type === "column",
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  }
}

export default useDndController
