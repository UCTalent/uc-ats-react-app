import { useEffect } from "react"
import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobCandidatesQuery as useJobCandidatesQueryType } from "./__generated__/useJobCandidatesQuery.graphql"
import { useRecoilState } from "recoil"
import { jobOverviewAtom } from "store/jobOverviewAtom"
import { IJobOverviewState } from "types/store/job-overview"

const jobCandidatesQuery = graphql`
  query useJobCandidatesQuery($id: String!) {
    job(id: $id) {
      about
      appliedNum
      benefits
      createdAt
      droppedNum
      experienceLevel
      hiredNum
      id
      jobType
      location
      locationType
      locationValue
      managementLevel
      minimumQualifications
      preferredRequirement
      responsibilities
      salary
      status
      title
      updatedAt
      viewedNum
      speciality {
        speciality
        role {
          name
        }
      }
    }
  }
`

const useJobCandidatesQuery = (jobId: string) => {
  const data = useLazyLoadQuery<useJobCandidatesQueryType>(jobCandidatesQuery, { id: jobId })
  const [jobOverview, setJobOverview] = useRecoilState(jobOverviewAtom)

  useEffect(() => {
    if (!data) return
    const newJobOverview: IJobOverviewState = {
      id: data.job.id,
      title: data.job.title,
      place: data.job.location,
      jobType: data.job.jobType,
      exp: data.job.experienceLevel,
      salary: data.job.salary.text,
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
