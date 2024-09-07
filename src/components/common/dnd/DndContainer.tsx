import { Container as SmoothContainer, type ContainerOptions } from "react-smooth-dnd"
import { type ReactNode } from "react"

type TypeProps = ContainerOptions & {
  children: ReactNode
}

const DndContainer: React.FC<TypeProps> = ({ children, ...containerProps }) => {
  return <SmoothContainer {...containerProps}>{children}</SmoothContainer>
}

export default DndContainer
