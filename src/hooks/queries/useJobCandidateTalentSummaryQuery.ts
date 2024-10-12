import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobCandidateTalentSummaryQuery as useJobCandidateTalentSummaryQueryType } from "./__generated__/useJobCandidateTalentSummaryQuery.graphql"
import { useEffect } from "react"
import { ITalentOverviewState } from "types/store/talent-overview"
import { useRecoilState } from "recoil"
import { talentOverviewAtom } from "store/talentOverviewAtom"

const jobCandidateUserSummaryQuery = graphql`
  query useJobCandidateTalentSummaryQuery($id: String!) {
    business {
      talent(id: $id) {
        about
        createdAt
        employmentStatus
        englishProficiency
        experienceLevel
        headline
        id
        managementLevel
        status
        step
        updatedAt
        skills {
          name
          roleId
          skillType
          updatedAt
          role {
            name
          }
          mainRole
        }
        user {
          avatar
          email
          id
          name
          phoneNumber
          phoneNumberCountry
        }
      }
    }
  }
`

const useJobCandidateTalentSummaryQuery = (talentId: string) => {
  const data = useLazyLoadQuery<useJobCandidateTalentSummaryQueryType>(
    jobCandidateUserSummaryQuery,
    { id: talentId }
  )
  const [talentOverview, setTalentOverview] = useRecoilState(talentOverviewAtom)

  useEffect(() => {
    if (!data) return
    const talent = data.business.talent
    const newTalentOverview: ITalentOverviewState = {
      id: talent.id,
      name: talent.user.name,
      avatar: talent.user.avatar,
      phone: talent.user.phoneNumber,
      email: talent.user.email,
      status: talent.status,
      role: talent.skills[0].name,
      place: talent.headline,
    }
    if (!talentOverview || (talentOverview && talentOverview.id !== newTalentOverview.id)) {
      setTalentOverview(newTalentOverview)
    }
  }, [data, setTalentOverview, talentOverview])

  return { data }
}

type JobCandidateTalentSummaryQueryType = useJobCandidateTalentSummaryQueryType["response"]

export { JobCandidateTalentSummaryQueryType }
export default useJobCandidateTalentSummaryQuery
