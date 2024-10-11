import { useEffect } from "react"
import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobInformationQuery as useJobInformationQueryType } from "./__generated__/useJobInformationQuery.graphql"
import { useRecoilState } from "recoil"
import { jobOverviewAtom } from "store/jobOverviewAtom"
import { IJobOverviewState } from "types/store/job-overview"

const jobInformationQuery = graphql`
  query useJobInformationQuery($id: String!) {
    business {
      job(id: $id) {
        about
        benefits
        experienceLevel
        id
        jobType
        location
        locationType
        managementLevel
        minimumQualifications
        responsibilities
        preferredRequirement
        salary
        speciality {
          role {
            name
          }
          speciality
        }
        title
        locationValue
        skills {
          name
        }
      }
    }
  }
`

const useJobInformationQuery = (jobId: string) => {
  const data = useLazyLoadQuery<useJobInformationQueryType>(jobInformationQuery, { id: jobId })
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

type JobInformationQueryType = useJobInformationQueryType["response"]

export { JobInformationQueryType }
export default useJobInformationQuery
