import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobsQuery as useJobsQueryType } from "./__generated__/useJobsQuery.graphql"

const jobsQuery = graphql`
  query useJobsQuery($page: Int!, $perPage: Int!) {
    jobs(perPage: $perPage, page: $page) {
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

const useJobsQuery = (page: number = 1, perPage: number = 10) => {
  const data = useLazyLoadQuery<useJobsQueryType>(jobsQuery, {
    page,
    perPage,
  })

  return { data }
}

type JobsListType = useJobsQueryType["response"]

export { JobsListType }
export default useJobsQuery
