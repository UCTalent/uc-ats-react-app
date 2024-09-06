import { type DragEndEvent, type DragOverEvent, type DragStartEvent } from "@dnd-kit/core"
// import { useState } from "react"

const useDndController = () => {
  // const [isColumnDraggable, setIsColumnDraggable] = useState<boolean>(false)
  // const [isSingleColumnCardDraggable, setIsSingleColumnCardDraggable] = useState<boolean>(false)
  // const [isMultiColumnsCardDraggable, setIsMultiColumnsCardDraggable] = useState<boolean>(false)

  const handleDragStart = (e: DragStartEvent) => {
    if (e.active.data.type === "column") {
      // setIsColumnDraggable(true)
      return
    }
    // setActiveDragItemType(
    //   e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.COLUMN : ACTIVE_DRAG_ITEM_TYPE.CARD
    // )
    // setActiveDragItemData(e?.active?.data?.current)
  }

  const handleDragOver = (e: DragOverEvent) => {
    console.log("🚀 ~ handleDragOver ~ e:", e)
  }

  const handleDragEnd = (e: DragEndEvent) => {
    console.log("🚀 ~ handleDragEnd ~ e:", e)
  }

  return {
    isDndMultipleColumns,
    setDndMultipleColumns,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  }
}

export default useDndController
