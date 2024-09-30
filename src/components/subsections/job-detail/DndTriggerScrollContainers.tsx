import DndContainer from "components/common/dnd/DndContainer"
import { ASIDE_NAVIGATE_COLLAPSE_WIDTH } from "constants/STYLE"

interface IProps {
  setIsDragOver: (isDragOver: boolean) => void
}

const DndTriggerScrollContainers: React.FC<IProps> = ({ setIsDragOver }) => {
  return (
    <>
      <DndContainer
        onDragEnter={() => setIsDragOver(true)}
        onDragEnd={() => setIsDragOver(false)}
        onDragLeave={() => setIsDragOver(false)}
        style={{
          position: "fixed",
          top: 0,
          left: `${ASIDE_NAVIGATE_COLLAPSE_WIDTH}px`,
          width: "60px",
          height: "100%",
        }}
      ></DndContainer>
      <DndContainer
        onDragEnter={() => setIsDragOver(true)}
        onDragEnd={() => setIsDragOver(false)}
        onDragLeave={() => setIsDragOver(false)}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "60px",
          height: "100%",
        }}
      ></DndContainer>
    </>
  )
}

export default DndTriggerScrollContainers
