import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobsQuery as useJobsQueryType } from "./__generated__/useJobsQuery.graphql"

const jobsQuery = graphql`
  query useJobsQuery {
    jobs(perPage: 30) {
      about
      createdAt
      experienceLevel
      id
      jobType
      locationType
      locationValue
      managementLevel
      minimumQualifications
      preferredRequirement
      responsibilities
      title
      updatedAt
      organization {
        id
        logoUrl
        name
      }
      country {
        codeIso3
        id
        name
      }
    }
  }
`

const useJobsQuery = () => {
  const data = useLazyLoadQuery<useJobsQueryType>(jobsQuery, {})
  return { data }
}

type JobsListType = useJobsQueryType["response"]

export { JobsListType }
export default useJobsQuery
