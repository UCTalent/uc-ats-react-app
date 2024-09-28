export interface IDndScene<ICardData> {
  [key: string]: {
    id: string
    data: ICardData
  }[]
}

export interface IDndResult {
  fromColumnId: string
  toColumnId: string
  removedIndex: number
  addedIndex: number
}
