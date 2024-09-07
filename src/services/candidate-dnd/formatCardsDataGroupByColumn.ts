import clonedeep from "lodash.clonedeep"
import { MOCK_CANDIDATE_CARD_DATA } from "constants/CANDIDATE_PROCESS"

const formatCardsDataGroupByColumn = () => {
  return clonedeep(MOCK_CANDIDATE_CARD_DATA)
}

export default formatCardsDataGroupByColumn
