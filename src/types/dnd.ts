import { type CSSProperties } from "react"
import { type ContainerOptions } from "react-smooth-dnd"

export interface IDndScene<ICardData> {
  type: "container"
  props: ContainerOptions
  children: {
    id: string
    type: "container"
    name: string
    props: ContainerOptions
    children: {
      id: string
      type: "draggable"
      props: Partial<IDndSceneCardProps>
      data: ICardData
    }[]
  }[]
}

interface IDndSceneCardProps {
  className: string
  style: CSSProperties
}
