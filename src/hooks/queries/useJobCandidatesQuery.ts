import { useEffect } from "react"
import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobCandidatesQuery as useJobCandidatesQueryType } from "./__generated__/useJobCandidatesQuery.graphql"
import { useRecoilState } from "recoil"
import { jobOverviewAtom } from "store/jobOverviewAtom"
import { IJobOverviewState } from "types/store/job-overview"

const jobCandidatesQuery = graphql`
  query useJobCandidatesQuery($id: String!) {
    business {
      job(id: $id) {
        about
        benefits
        experienceLevel
        id
        jobApplies {
          status
          talent {
            id
            user {
              avatar
              email
              id
              name
            }
            status
          }
          createdAt
        }
        jobType
        location
        locationType
        managementLevel
        minimumQualifications
        responsibilities
        salary
        speciality {
          role {
            name
          }
          speciality
        }
        title
        locationValue
      }
    }
  }
`

const useJobCandidatesQuery = (jobId: string) => {
  const data = useLazyLoadQuery<useJobCandidatesQueryType>(jobCandidatesQuery, { id: jobId })
  const [jobOverview, setJobOverview] = useRecoilState(jobOverviewAtom)

  useEffect(() => {
    if (!data) return
    const job = data.business.job
    const newJobOverview: IJobOverviewState = {
      id: job.id,
      title: job.title,
      place: job.location,
      jobType: job.jobType,
      exp: job.experienceLevel,
      salary: job.salary.text,
      isRemote: true,
    }
    if (!jobOverview || (jobOverview && jobOverview.id !== newJobOverview.id)) {
      setJobOverview(newJobOverview)
    }
  }, [data, jobOverview, setJobOverview])

  // useEffect(() => {
  //   setJobOverview(null)
  // }, [jobId])

  return { data }
}

type JobCandidatesQueryType = useJobCandidatesQueryType["response"]

export { JobCandidatesQueryType }
export default useJobCandidatesQuery
