export interface IDndScene<ICardData> {
  [key: string]: {
    id: string
    data: ICardData
  }[]
}
