import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import Stack from "@mui/material/Stack"
import { CandidateStageColumn } from "components/sections/job-detail"
import { CANDIDATE_PROCESS, ICandidate, initialCandidates } from "utils/mockSceneDndKit"
import { useCallback, useMemo, useState } from "react"
import { coordinateGetter, hasDraggableData } from "services/dnd"
import { arrayMove, horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import { createPortal } from "react-dom"
import { CandidateStageColumnCard } from "components/subsections/job-detail"

export type ColumnId = (typeof CANDIDATE_PROCESS)[number]["id"]

const TheJobCandidatePage = () => {
  const [columns, setColumns] = useState(CANDIDATE_PROCESS)
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns])

  const [candidates, setCandidates] = useState<ICandidate[]>(initialCandidates)

  const [activeColumn, setActiveColumn] = useState<(typeof CANDIDATE_PROCESS)[number] | null>(null)

  const [activeTask, setActiveTask] = useState<ICandidate | null>(null)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 0, // Enable sort function when dragging 10px
      },
    })
    // useSensor(TouchSensor),
    // useSensor(KeyboardSensor, {
    //   coordinateGetter: coordinateGetter,
    // })
  )

  const onDragStart = useCallback((event: DragStartEvent) => {
    if (!hasDraggableData(event.active)) return
    const data = event.active.data.current
    if (data?.type === "Column") {
      setActiveColumn(data.column)
      return
    }

    if (data?.type === "Task") {
      setActiveTask(data.task)
      return
    }
  }, [])

  const onDragEnd = useCallback((event: DragEndEvent) => {
    setActiveColumn(null)
    setActiveTask(null)

    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (!hasDraggableData(active)) return

    const activeData = active.data.current

    if (activeId === overId) return

    const isActiveAColumn = activeData?.type === "Column"
    if (!isActiveAColumn) return

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId)

      const overColumnIndex = columns.findIndex((col) => col.id === overId)

      return arrayMove(columns, activeColumnIndex, overColumnIndex)
    })
  }, [])

  const onDragOver = useCallback((event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    if (!hasDraggableData(active) || !hasDraggableData(over)) return

    const activeData = active.data.current
    const overData = over.data.current

    const isActiveATask = activeData?.type === "Task"
    const isOverATask = overData?.type === "Task"

    if (!isActiveATask) return

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setCandidates((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId)
        const overIndex = tasks.findIndex((t) => t.id === overId)
        const activeTask = tasks[activeIndex]
        const overTask = tasks[overIndex]
        if (activeTask && overTask && activeTask.columnId !== overTask.columnId) {
          activeTask.columnId = overTask.columnId
          return arrayMove(tasks, activeIndex, overIndex - 1)
        }

        return arrayMove(tasks, activeIndex, overIndex)
      })
    }

    const isOverAColumn = overData?.type === "Column"

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setCandidates((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId)
        const activeTask = tasks[activeIndex]
        if (activeTask) {
          activeTask.columnId = overId as ColumnId
          return arrayMove(tasks, activeIndex, activeIndex)
        }
        return tasks
      })
    }
  }, [])

  return (
    <Stack sx={{ flexGrow: 1, py: "16px", overflow: "auto" }}>
      <Stack flexDirection="row" sx={{ flexGrow: 1, gap: "18px" }}>
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
          <SortableContext items={columnsId} strategy={horizontalListSortingStrategy}>
            {columns.map((column, columnIndex) => (
              <CandidateStageColumn
                key={column.id}
                column={column}
                cards={candidates.filter((c) => c.columnId === column.id)}
                name={column.name}
                colors={CANDIDATE_PROCESS[columnIndex].colors}
              />
            ))}
          </SortableContext>

          {"document" in window &&
            createPortal(
              <DragOverlay>
                {activeColumn && (
                  <CandidateStageColumn
                    name={activeColumn?.name}
                    column={activeColumn}
                    cards={candidates.filter((c) => c.columnId === activeColumn?.id)}
                    colors={
                      CANDIDATE_PROCESS[columns.findIndex((col) => col.id === activeColumn?.id)]
                        .colors
                    }
                  />
                )}
                {activeTask && (
                  <CandidateStageColumnCard task={activeTask} sx={{ cursor: "grabbing" }} />
                )}
              </DragOverlay>,
              document.body
            )}
        </DndContext>
      </Stack>
    </Stack>
  )
}

export default TheJobCandidatePage
