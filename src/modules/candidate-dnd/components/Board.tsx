/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DndContext as BoardDndContext,
  defaultDropAnimationSideEffects,
  DragOverlay,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext as BoardDndSortableContext,
  // defaultAnimateLayoutChanges,
  // useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
import { Box } from "@mui/material"
import { CANDIDATE_PROCESS } from "constants/CANDIDATE_PROCESS"
import React, { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
  renderDragColumnOverlay?: () => ReactNode
  renderDragCardOverlay?: () => ReactNode
}

const Board: React.FC<TypeProps> = ({ children }) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // Enable sort function when dragging 10px
    },
  })
  const sensors = useSensors(mouseSensor)

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  }

  const handleDragStart = (e) => {
    console.log("🚀 ~ handleDragStart ~ e:", e)
    // setActiveDragItemType(
    //   e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.COLUMN : ACTIVE_DRAG_ITEM_TYPE.CARD
    // )
    // setActiveDragItemData(e?.active?.data?.current)
  }

  const handleDragOver = (e) => {
    console.log("🚀 ~ handleDragOver ~ e:", e)
    // if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    // const { active, over } = e
    // if (!active || !over) return
    // const {
    //   id: overCardId,
    //   data: { current: overDraggingCardData },
    // } = over
    // const overColumnId = overDraggingCardData?.cardId
    //   ? overDraggingCardData.parentId
    //   : overDraggingCardData.columnId
    // const overCardIndex = overDraggingCardData?.cardIndex
    // const cardsLength = overDraggingCardData?.cardsLength
    // const isBelowOverItem =
    //   active.rect.current.translated &&
    //   active.rect.current.translated.top > over.rect.top + over.rect.height
    // const modifier = isBelowOverItem ? 1 : 0
    // const newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : cardsLength + 1
    // setDraggingOverColumnId(overColumnId)
    // setOverCardIndex(newCardIndex)
    // setOverCardId(overCardId)
  }

  const handleDragEnd = (e) => {
    console.log("🚀 ~ handleDragEnd ~ e:", e)
    // const { active, over } = e
    // if (!active || !over) return
    // if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
    //   setIsDragEnd(true)
    // }
    // if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && active.id !== over.id) {
    //   const oldIndex = columnsData.findIndex((column) => column.columnId === active.id)
    //   const newIndex = columnsData.findIndex((column) => column.columnId === over.id)
    //   const dndOrderedColumns = arrayMove(columnsData, oldIndex, newIndex)
    //   setColumnsData(dndOrderedColumns)
    //   const columnsListData = columnsListStorage.load()
    //   let newColumnsListData = columnsListData.filter((column) => column.parentId !== boardId)
    //   newColumnsListData = [...newColumnsListData, ...dndOrderedColumns]
    //   columnsListStorage.save(newColumnsListData)
    // }
    // setActiveDragItemType(null)
    // setActiveDragItemData(null)
  }

  return (
    <BoardDndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <BoardDndSortableContext
        items={CANDIDATE_PROCESS.map((c) => c.id)}
        strategy={horizontalListSortingStrategy}
      >
        {children}
        <DragOverlay dropAnimation={dropAnimation}>
          <Box sx={{ width: "100%", height: "100%", bgcolor: "black" }}></Box>
        </DragOverlay>
      </BoardDndSortableContext>
    </BoardDndContext>
  )
}

export default Board
