import { useCallback, useEffect, useState } from "react"
import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobCandidatesQuery as useJobCandidatesQueryType } from "./__generated__/useJobCandidatesQuery.graphql"
import { useRecoilState } from "recoil"
import { jobOverviewAtom } from "store/jobOverviewAtom"
import { IJobOverviewState } from "types/store/job-overview"
import { getSalaryText } from "services/job/candidates"

const jobCandidatesQuery = graphql`
  query useJobCandidatesQuery($id: String!) {
    business {
      job(id: $id) {
        experienceLevel
        id
        jobApplies {
          id
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
          id
        }
        jobType
        location
        locationType
        locationValue
        managementLevel
        salary
        speciality {
          role {
            name
          }
          speciality
        }
        title
        web3meta
      }
    }
  }
`

const useJobCandidatesQuery = (jobId: string) => {
  const [fetchKey, setFetchKey] = useState<number>(0)
  const data = useLazyLoadQuery<useJobCandidatesQueryType>(
    jobCandidatesQuery,
    { id: jobId },
    { fetchKey, fetchPolicy: "network-only" }
  )
  const [jobOverview, setJobOverview] = useRecoilState(jobOverviewAtom)

  useEffect(() => {
    if (!data) return
    const job = data.business.job
    const newJobOverview: IJobOverviewState = {
      id: job.id,
      title: job.title,
      place: job.locationValue,
      jobType: job.jobType,
      exp: job.experienceLevel,
      salary: getSalaryText(job.salary.text),
      isRemote: true,
    }
    if (!jobOverview || (jobOverview && jobOverview.id !== newJobOverview.id)) {
      setJobOverview(newJobOverview)
    }
  }, [data, jobOverview, setJobOverview, fetchKey])

  const refetch = useCallback(() => {
    setFetchKey((prev) => prev + 1)
  }, [setFetchKey])

  return { data, refetch }
}

type JobCandidatesQueryType = useJobCandidatesQueryType["response"]

export { JobCandidatesQueryType }
export default useJobCandidatesQuery
