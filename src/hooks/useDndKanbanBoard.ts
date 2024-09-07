import { useState } from "react"
import { applyDrag } from "services/dnd"
import type { IDndScene } from "types/dnd"
import { type DropResult } from "react-smooth-dnd"

const useDndKanbanBoard = <ICardData>(initialScene: IDndScene<ICardData>) => {
  const [scene, setScene] = useState<IDndScene<ICardData>>(initialScene)

  const onCardDrop = (columnId: string, dropResult: DropResult) => {
    console.log(dropResult)

    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const updatedScene = { ...scene }
      const column = updatedScene.children.find((p) => p.id === columnId)
      const columnIndex = updatedScene.children.indexOf(column)

      const newColumn = { ...column }
      newColumn.children = applyDrag(newColumn.children, dropResult)
      updatedScene.children.splice(columnIndex, 1, newColumn)

      setScene(updatedScene)
    }
  }

  const getCardPayload = (columnId: string, index: number) => {
    return scene.children.filter((p) => p.id === columnId)[0].children[index]
  }

  return { dataToRender: scene, onCardDrop, getCardPayload }
}

export default useDndKanbanBoard
