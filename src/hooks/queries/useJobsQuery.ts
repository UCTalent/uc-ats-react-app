import { JOBS_STATUS_DB, JOBS_STATUS_PARAMS } from "constants/JOB"
import { useMemo, useState } from "react"
import { graphql, useLazyLoadQuery } from "react-relay"
import { useJobsQuery as useJobsQueryType } from "./__generated__/useJobsQuery.graphql"

const jobsQuery = graphql`
  query useJobsQuery($status: [String!]!, $page: Int!, $perPage: Int!) {
    business {
      jobs(status: $status, page: $page, perPage: $perPage) {
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
          jobApplies {
            candidateTimestamp
            candidateWalletAddress {
              address
            }
            jobReferral {
              referrerWalletAddress {
                address
              }
              referrerTimestamp
            }
          }
          web3meta
        }
        totalPages
      }
    }
  }
`

const {
  CRAWLED,
  APPROVED,
  REJECTED,
  SUCCESS_COMPLETED,
  FAIL_COMPLETED,
  PUBLISHED,
  EXPIRED,
  PENDING_TO_REVIEW,
} = JOBS_STATUS_DB

// const ALL_STATUS = [
//   APPROVED,
//   PUBLISHED,
//   REJECTED,
//   CRAWLED,
//   PENDING_TO_REVIEW,
//   SUCCESS_COMPLETED,
//   FAIL_COMPLETED,
//   EXPIRED,
// ]

const STATUS_TO_QUERY = {
  active: [APPROVED, PUBLISHED],
  closed: [REJECTED, EXPIRED],
  pending: [CRAWLED, PENDING_TO_REVIEW],
  completing: [SUCCESS_COMPLETED, FAIL_COMPLETED, EXPIRED],
}

const useJobsQuery = (status: JOBS_STATUS_PARAMS, page: number, perPage: number = 10) => {
  const [fetchKey, setFetchKey] = useState(1)
  const data = useLazyLoadQuery<useJobsQueryType>(
    jobsQuery,
    {
      status: STATUS_TO_QUERY[status] || STATUS_TO_QUERY.active,
      // status: ALL_STATUS,
      page: page || 1,
      perPage,
    },
    {
      fetchKey,
      fetchPolicy: "network-only",
    }
  )

  const isJobsEmpty = useMemo(() => data && data.business.jobs.jobs.length === 0, [data])

  const refetch = () => {
    setFetchKey((pre) => pre + 1)
  }

  return { data, isJobsEmpty, refetch }
}

type JobsListType = useJobsQueryType["response"]

export { JobsListType }
export default useJobsQuery
