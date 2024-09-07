import { atom, selector } from "recoil"
import type { IAtomCandidateCards } from "types/store/candidateAtom"

export const candidateCardAtom = atom<IAtomCandidateCards>({
  key: "candidateCardAtom",
  default: null,
})

export const getCandidateCardIds = (columnId: string) =>
  selector<string[]>({
    key: "candidateCardAtom",
    get: ({ get }) => {
      const cards = get(candidateCardAtom)
      const columnCards = cards?.[columnId]
      if (!columnCards) return []
      return columnCards.map((c) => c.id)
    },
  })
