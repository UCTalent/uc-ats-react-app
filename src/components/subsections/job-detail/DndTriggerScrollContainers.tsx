import DndContainer from "components/common/dnd/DndContainer"

interface IProps {
  setIsDragOver: (isDragOver: boolean) => void
  dndBoardElement: HTMLDivElement
}

const DndTriggerScrollContainers: React.FC<IProps> = ({ setIsDragOver, dndBoardElement }) => {
  return (
    <>
      <DndContainer
        onDragEnter={() => setIsDragOver(true)}
        onDragEnd={() => setIsDragOver(false)}
        onDragLeave={() => setIsDragOver(false)}
        style={{
          position: "fixed",
          top: 0,
          left: dndBoardElement.offsetLeft,
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
