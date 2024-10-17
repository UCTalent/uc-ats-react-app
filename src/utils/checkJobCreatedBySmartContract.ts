import { EVENT_SMART_CONTRACT } from "constants/EVENT_SMART_CONTRACT"
import { EventMetaType } from "types/smart-contract"

export const checkJobCreatedBySmartContract = (web3meta: Array<EventMetaType> = []) => {
  return !!web3meta.find((e) => e.name === EVENT_SMART_CONTRACT.JobCreated)
}
