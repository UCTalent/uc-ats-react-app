export type Web3metaType = {
  chain_name: string
  events: Array<EventMetaType>
}

export type EventMetaType = {
  data: unknown
  name: string
}
