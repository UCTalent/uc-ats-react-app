/* eslint-disable @typescript-eslint/ban-ts-comment */
import cloneDeep from "lodash.clonedeep"
import { useCallback, useEffect, useState } from "react"
import { DragStartParams, type DropResult } from "react-smooth-dnd"
import useConfirmAtom from "./atoms/useConfirmAtom"
import { getChangeStatusWarningMessage } from "services/dnd/getChangeStatusWarningMessage"
import type { IDndResult, IDndScene } from "types/dnd"

type Options = {
  allowDropInnerColumn?: boolean
}

const DEFAULT_OPTIONS: Options = {
  allowDropInnerColumn: true,
}

const useDndKanbanBoard = <ICardData>(
  initialScene: IDndScene<ICardData>,
  handleDrop: (result: IDndResult, payload: ICardData) => Promise<void>,
  options: Options = DEFAULT_OPTIONS
) => {
  const { allowDropInnerColumn } = options

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
      if (!allowDropInnerColumn) return
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
      handleDrop(dndResult, movedCard.data)
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
        //@ts-ignore
        render: () => getChangeStatusWarningMessage(movedCard.data?.talent?.user?.name, toColumnId),
        onConfirm: handleDndMultipleColumns,
        onCancel: handleCancelDndMultipleColumns,
        isActive: true,
      })
    } else {
      handleDndMultipleColumns()
    }
  }, [allowDropInnerColumn, configConfirm, dndResult, handleDrop, movedCard, scene])

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
