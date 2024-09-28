import cloneDeep from "lodash.clonedeep"
import { useCallback, useState } from "react"
import { DragStartParams, type DropResult } from "react-smooth-dnd"
import type { IDndScene } from "types/dnd"

const useDndKanbanBoard = <ICardData>(initialScene: IDndScene<ICardData>) => {
  const [scene, setScene] = useState<IDndScene<ICardData>>(cloneDeep(initialScene))
  const [payload, setPayload] = useState<{ id: string; data: ICardData } | null>(null)
  const [dragEnterColumnId, setDragEnterColumnId] = useState<string | null>(null)
  const [dropReadyColumnId, setDropReadyColumnId] = useState<string | null>(null)
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null)

  const onCardDragStart = useCallback(
    (e: DragStartParams): void => {
      setPayload(e.payload)
      setActiveColumnId(Object.keys(scene).find((p) => scene[p].find((q) => q.id === e.payload.id)))
    },
    [scene]
  )

  const onCardDragEnd = useCallback((): void => {
    setPayload(null)
    setDragEnterColumnId(null)
    setDropReadyColumnId(null)
    setActiveColumnId(null)
  }, [])

  const onDragEnter = useCallback((columnId: string): void => {
    setDragEnterColumnId(columnId)
  }, [])

  const onDropReady = useCallback((columnId: string): void => {
    setDropReadyColumnId(columnId)
  }, [])

  const onCardDrop = useCallback(
    (columnId: string, dropResult: DropResult): void => {
      const { removedIndex, addedIndex } = dropResult
      if (removedIndex === null && addedIndex === null) return

      if (removedIndex !== null && addedIndex !== null) {
        const newScene = Object.assign({}, scene)
        const [movedCard] = newScene[columnId].splice(removedIndex, 1)
        newScene[columnId].splice(addedIndex, 0, movedCard)
        // setScene(newScene)
        return
      }

      if (removedIndex !== null) {
        const newScene = Object.assign({}, scene)
        newScene[columnId].splice(removedIndex, 1)
        // setScene(newScene)
        return
      }

      if (addedIndex !== null) {
        const newScene = Object.assign({}, scene)
        newScene[columnId].splice(addedIndex, 0, dropResult.payload)
        setScene(newScene)
      }
    },
    [scene]
  )

  const getCardPayload = useCallback(
    (columnId: string, index: number): { id: string; data: ICardData } => {
      return scene[columnId][index]
    },
    [scene]
  )

  return {
    dataToRender: scene,
    payload,
    activeColumnId,
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
