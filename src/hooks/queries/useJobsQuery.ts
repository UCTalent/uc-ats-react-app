import { useLazyLoadQuery, graphql } from "react-relay"
import { useJobsQuery as useJobsQueryType } from "./__generated__/useJobsQuery.graphql"

const jobsQuery = graphql`
  query useJobsQuery($page: Int!, $perPage: Int!) {
    business {
      jobs(page: $page, perPage: $perPage) {
        jobs {
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
          organization {
            name
            logoUrl
          }
        }
        totalPages
      }
    }
  }
`

const useJobsQuery = (page: number, perPage: number = 10) => {
  const data = useLazyLoadQuery<useJobsQueryType>(jobsQuery, {
    page: page || 1,
    perPage,
  })

  return { data }
}

type JobsListType = useJobsQueryType["response"]

export { JobsListType }
export default useJobsQuery
