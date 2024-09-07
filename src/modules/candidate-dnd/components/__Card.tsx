import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import React, { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
  id: number
  columnId: number
  cardIndex: number
  cardsLength: number
}

const Card: React.FC<TypeProps> = ({ children, id, cardIndex, cardsLength, columnId }) => {
  const {
    setNodeRef,
    // setActivatorNodeRef,
    listeners,
    isDragging,
    // isSorting,
    // over,
    // overIndex,
    transform,
    transition,
    attributes,
  } = useSortable({
    id,
    data: { id, type: "card", cardIndex, cardsLength, columnId },
  })

  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={dndKitCardStyles}
      onDrag={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export default Card
