import { Container as SmoothContainer, type ContainerOptions } from "react-smooth-dnd"
import { memo, type ReactNode, type CSSProperties } from "react"

type TypeProps = ContainerOptions & {
  children?: ReactNode
  dropPlaceholderAnimationDuration?: number
  style?: CSSProperties
}

const DndContainer: React.FC<TypeProps> = ({ children, ...containerProps }) => {
  return <SmoothContainer {...containerProps}>{children}</SmoothContainer>
}

export default memo(DndContainer)
