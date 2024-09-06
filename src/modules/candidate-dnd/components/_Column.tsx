/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  SortableContext as ColumnDndSortableContext,
  defaultAnimateLayoutChanges,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import React, { type ReactNode } from "react"
import { CSS } from "@dnd-kit/utilities"
// import { CANDIDATE_PROCESS } from "constants/CANDIDATE_PROCESS"

interface TypeProps {
  children: ReactNode
  id: number
  cards: object[]
  columnData: object
}

const Column: React.FC<TypeProps> = ({ children, id, cards, columnData }) => {
  const {
    // active, over,
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id,
    data: { ...columnData, type: "column" },
    animateLayoutChanges: defaultAnimateLayoutChanges,
  })

  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined,
  }

  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes} {...listeners}>
      <ColumnDndSortableContext
        // @ts-ignore
        items={cards.map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </ColumnDndSortableContext>
    </div>
  )
}

export default Column
