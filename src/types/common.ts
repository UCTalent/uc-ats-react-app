import { SxProps, Theme } from "@mui/material"

export interface IMetaSEO {
  title: string
  description?: string
  lang?: string
}

export interface IconProps {
  width?: string | number
  height?: string | number
  className?: string
  color?: string
  sx?: SxProps<Theme>
  otherProps?: Record<string, string>
}

export interface OptionSelect {
  value: string
  label: string
  additional?: unknown
  id?: string
}

export interface IBaseOption {
  value: number | string
  name: number | string
}

export interface IAutocompleteOption {
  label: string
  value: number | string
}

export type TFunction = (...args: unknown[]) => void | unknown

export type TFunctionPromise = (...args: unknown[]) => Promise<void | unknown>
