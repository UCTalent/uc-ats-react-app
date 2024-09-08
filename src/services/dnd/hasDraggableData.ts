import { Active, Over } from "@dnd-kit/core"
// import { ColumnDragData } from "./BoardColumn"
// import { TaskDragData } from "./TaskCard"

// type DraggableData = ColumnDragData | TaskDragData

export const hasDraggableData = <T extends Active | Over>(
  entry: T | null | undefined
): entry is T & {
  data
} => {
  if (!entry) {
    return false
  }

  const data = entry.data.current

  if (data?.type === "Column" || data?.type === "Task") {
    return true
  }

  return false
}

export default hasDraggableData
