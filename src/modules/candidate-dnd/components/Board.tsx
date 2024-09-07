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
import { useDndController } from "../hooks"

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

  const { handleDragStart, handleDragOver, handleDragEnd, isColumnDraggable } = useDndController()

  console.log(isColumnDraggable)
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
