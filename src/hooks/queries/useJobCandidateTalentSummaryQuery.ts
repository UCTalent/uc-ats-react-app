import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobCandidateTalentSummaryQuery as useJobCandidateTalentSummaryQueryType } from "./__generated__/useJobCandidateTalentSummaryQuery.graphql"
import { useEffect } from "react"
import { ITalentOverviewState } from "types/store/talent-overview"
import { useRecoilState } from "recoil"
import { talentOverviewAtom } from "store/talentOverviewAtom"

const jobCandidateUserSummaryQuery = graphql`
  query useJobCandidateTalentSummaryQuery($id: String!) {
    business {
      jobApply(id: $id) {
        id
        talent {
          headline
          id
          managementLevel
          skills {
            name
          }
          specialities {
            id
            speciality
            role {
              name
            }
          }
          user {
            avatar
            email
            id
            name
            phoneNumber
            phoneNumberCountry
            city {
              nameAscii
            }
          }
          englishProficiency
          about
          experienceLevel
        }
        uploadedResume {
          resumeUrl
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
    const talent = data.business.jobApply.talent
    const newTalentOverview: Omit<ITalentOverviewState, "status"> = {
      id: talent.id,
      name: talent.user.name,
      avatar: talent.user.avatar,
      phone: talent.user.phoneNumber,
      email: talent.user.email,
      role: talent.specialities[0]?.speciality,
      place: talent.user.city.nameAscii,
    }
    if (!talentOverview || (talentOverview && talentOverview.id !== newTalentOverview.id)) {
      setTalentOverview((prev) => ({ ...prev, ...newTalentOverview }))
    }
  }, [data, setTalentOverview, talentOverview])

  return { data }
}

type JobCandidateTalentSummaryQueryType = useJobCandidateTalentSummaryQueryType["response"]

export { JobCandidateTalentSummaryQueryType }
export default useJobCandidateTalentSummaryQuery
