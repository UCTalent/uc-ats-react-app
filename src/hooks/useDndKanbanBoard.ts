import cloneDeep from "lodash.clonedeep"
import { useCallback, useState } from "react"
import { applyDrag } from "services/dnd"
import { DragStartParams, type DropResult } from "react-smooth-dnd"
import type { IDndScene, IDndSceneCard } from "types/dnd"

const useDndKanbanBoard = <ICardData>(initialScene: IDndScene<ICardData>) => {
  const [scene, setScene] = useState<IDndScene<ICardData>>(cloneDeep(initialScene))
  const [payload, setPayload] = useState<IDndSceneCard<ICardData> | null>(null)
  const [dragEnterColumnId, setDragEnterColumnId] = useState<string | null>(null)
  const [dropReadyColumnId, setDropReadyColumnId] = useState<string | null>(null)

  const onCardDragStart = useCallback((e: DragStartParams): void => {
    setPayload(e.payload.data)
  }, [])

  const onCardDragEnd = useCallback((): void => {
    setPayload(null)
    setDragEnterColumnId(null)
    setDropReadyColumnId(null)
  }, [])

  const onDragEnter = useCallback((columnId: string): void => {
    setDragEnterColumnId(columnId)
  }, [])

  const onDropReady = useCallback((columnId: string): void => {
    setDropReadyColumnId(columnId)
  }, [])

  const onCardDrop = useCallback(
    (columnId: string, dropResult: DropResult): void => {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const updatedScene = Object.assign({}, scene)
        const column = updatedScene.children.find((p) => p.id === columnId)
        const columnIndex = updatedScene.children.indexOf(column)

        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag<IDndSceneCard<ICardData>>(newColumn.children, dropResult)
        updatedScene.children.splice(columnIndex, 1, newColumn)

        setScene(updatedScene)
      }
    },
    [scene]
  )

  const getCardPayload = useCallback(
    (columnId: string, index: number): IDndSceneCard<ICardData> => {
      return scene.children.find((p) => p.id === columnId).children[index]
    },
    [scene.children]
  )

  return {
    dataToRender: scene,
    payload,
    dragEnterColumnId,
    dropReadyColumnId,
    onCardDrop,
    onCardDragStart,
    onCardDragEnd,
    onDragEnter,
    onDropReady,
    getCardPayload,
  }
}

export default useDndKanbanBoard
