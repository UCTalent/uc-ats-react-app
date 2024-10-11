import cloneDeep from "lodash.clonedeep"
import { useCallback, useEffect, useState } from "react"
import { DragStartParams, type DropResult } from "react-smooth-dnd"
import useConfirmAtom from "./atoms/useConfirmAtom"
import { getChangeStatusWarningMessage } from "services/dnd/getChangeStatusWarningMessage"
import type { IDndResult, IDndScene } from "types/dnd"

const useDndKanbanBoard = <ICardData>(initialScene: IDndScene<ICardData>) => {
  const [scene, setScene] = useState<IDndScene<ICardData>>(cloneDeep(initialScene))
  const [payload, setPayload] = useState<{ id: string; data: ICardData } | null>(null)
  const [movedCard, setMovedCard] = useState<{ id: string; data: ICardData } | null>(null)
  const [dndResult, setDndResult] = useState<IDndResult | null>(null)
  const [dragEnterColumnId, setDragEnterColumnId] = useState<string | null>(null)
  const [dropReadyColumnId, setDropReadyColumnId] = useState<string | null>(null)
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null)
  const { configConfirm } = useConfirmAtom()

  useEffect(() => {
    return () => {
      setScene({})
    }
  }, [])

  const getCardPayload = useCallback(
    (columnId: string, index: number): { id: string; data: ICardData } => {
      return scene[columnId][index]
    },
    [scene]
  )

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
        setDndResult({
          fromColumnId: columnId,
          toColumnId: columnId,
          removedIndex,
          addedIndex,
        })
        return
      }

      if (removedIndex !== null) {
        const newScene = Object.assign({}, scene)
        const [movedCard] = newScene[columnId].splice(removedIndex, 1)
        setMovedCard(movedCard)
        setDndResult((prev) => ({ ...prev, fromColumnId: columnId, removedIndex }))
        return
      }

      if (addedIndex !== null) {
        setDndResult((prev) => ({ ...prev, toColumnId: columnId, addedIndex }))
        return
      }
    },
    [scene]
  )

  useEffect(() => {
    const { fromColumnId, toColumnId, removedIndex, addedIndex } = dndResult || {}
    if (!fromColumnId || !toColumnId || removedIndex === null || addedIndex === null) return

    if (fromColumnId === toColumnId) {
      const newScene = cloneDeep(scene)
      const [movedCard] = newScene[fromColumnId].splice(removedIndex, 1)
      newScene[fromColumnId].splice(addedIndex, 0, movedCard)
      setScene(newScene)
      setDndResult(null)
      return
    }

    const handleDndMultipleColumns = () => {
      const newScene = cloneDeep(scene)
      newScene[toColumnId].splice(addedIndex, 0, movedCard)
      setScene(newScene)
      setDndResult(null)
      setMovedCard(null)
    }

    const handleCancelDndMultipleColumns = () => {
      const newScene = cloneDeep(scene)
      newScene[fromColumnId].splice(removedIndex, 0, movedCard)
      setScene(newScene)
      setDndResult(null)
      setMovedCard(null)
    }

    if (["hire", "failed"].includes(toColumnId)) {
      configConfirm({
        title: `Change status`,
        render: () => getChangeStatusWarningMessage("Le Quang Duy", toColumnId),
        onConfirm: handleDndMultipleColumns,
        onCancel: handleCancelDndMultipleColumns,
        isActive: true,
      })
    } else {
      handleDndMultipleColumns()
    }
  }, [configConfirm, dndResult, movedCard, scene])

  return {
    dataToRender: scene,
    payload,
    dndResult,
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
