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
