import { type CSSProperties } from "react"
import { type ContainerOptions } from "react-smooth-dnd"

export interface IDndScene<ICardData> {
  type: "container"
  props: ContainerOptions
  children: IDndSceneColumn<ICardData>[]
}

interface IDndSceneColumn<ICardData> {
  id: string
  type: "container"
  name: string
  props: ContainerOptions
  children: IDndSceneCard<ICardData>[]
}

export interface IDndSceneCard<ICardData> {
  id: string
  type: "draggable"
  props: Partial<IDndSceneCardProps>
  data: ICardData
}

interface IDndSceneCardProps {
  className: string
  style: CSSProperties
}
