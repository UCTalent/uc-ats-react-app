import { useCallback, useState } from "react"
import { applyDrag } from "services/dnd"
import type { IDndScene, IDndSceneCard } from "types/dnd"
import { DragStartParams, type DropResult } from "react-smooth-dnd"

const useDndKanbanBoard = <ICardData>(initialScene: IDndScene<ICardData>) => {
  const [scene, setScene] = useState<IDndScene<ICardData>>(initialScene)
  const [payload, setPayload] = useState<IDndSceneCard<ICardData> | null>(null)

  const onCardDragStart = useCallback((e: DragStartParams): void => {
    setPayload(e.payload.data)
  }, [])

  const onCardDragEnd = useCallback((): void => {
    setPayload(null)
  }, [])

  const onCardDrop = useCallback(
    (columnId: string, dropResult: DropResult): void => {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const updatedScene = { ...scene }
        const column = updatedScene.children.find((p) => p.id === columnId)
        const columnIndex = updatedScene.children.indexOf(column)

        const newColumn = { ...column }
        newColumn.children = applyDrag(newColumn.children, dropResult)
        updatedScene.children.splice(columnIndex, 1, newColumn)

        setScene(updatedScene)
      }
    },
    [scene]
  )

  const getCardPayload = useCallback(
    (columnId: string, index: number): IDndSceneCard<ICardData> => {
      return scene.children.filter((p) => p.id === columnId)[0].children[index]
    },
    [scene.children]
  )

  return {
    dataToRender: scene,
    payload,
    onCardDrop,
    onCardDragStart,
    onCardDragEnd,
    getCardPayload,
  }
}

export default useDndKanbanBoard
