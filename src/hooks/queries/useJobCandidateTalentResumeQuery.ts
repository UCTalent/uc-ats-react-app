import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobCandidateTalentResumeQuery as useJobCandidateTalentResumeQueryType } from "./__generated__/useJobCandidateTalentResumeQuery.graphql"
import { useEffect } from "react"
import { ITalentOverviewState } from "types/store/talent-overview"
import { useRecoilState } from "recoil"
import { talentOverviewAtom } from "store/talentOverviewAtom"

const jobCandidateUserResumeQuery = graphql`
  query useJobCandidateTalentResumeQuery($id: String!) {
    business {
      jobApply(id: $id) {
        id
        talent {
          id
          managementLevel
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
        }
        uploadedResume {
          resumeUrl
        }
      }
    }
  }
`

const useJobCandidateTalentResumeQuery = (talentId: string) => {
  const data = useLazyLoadQuery<useJobCandidateTalentResumeQueryType>(jobCandidateUserResumeQuery, {
    id: talentId,
  })
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

type JobCandidateTalentResumeQueryType = useJobCandidateTalentResumeQueryType["response"]

export { JobCandidateTalentResumeQueryType }
export default useJobCandidateTalentResumeQuery
