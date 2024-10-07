export interface APIRes<IData> {
  status: "ok" | string
  code: number
  message: string
  error_info: string
  data: IData
}

export interface APIError {
  status: "error"
  code: number
  message: string
  error_info: string
}
