import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import React, { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
  id: number
  columnId: number
}

const Card: React.FC<TypeProps> = ({ children, id }) => {
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
    data: { id, type: "card" },
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
