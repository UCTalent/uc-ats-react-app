import { type FunctionComponent, type ReactNode } from "react"
import type { IMetaSEO } from "types/common"

export interface TypeRoute {
  path: string
  component: FunctionComponent
  layout?: FunctionComponent<{ children: ReactNode }>
  meta: IMetaSEO
}
