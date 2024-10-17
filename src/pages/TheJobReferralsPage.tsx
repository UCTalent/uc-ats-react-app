import { useEffect } from "react"
import Stack from "@mui/material/Stack"
import TheReferralsList from "components/sections/referrals/TheReferralsList"
import TopBarWithTitle from "components/sections/referrals/TopBarWithTitle"
import TabsFilter from "components/subsections/referrals/TabsFilter"
import FooterPagination from "components/sections/home/FooterPagination"
import useJobsSearchParams from "hooks/useJobsSearchParams"
import useJobsQuery from "hooks/queries/useJobsQuery"
import { JOBS_STATUS_PARAMS } from "constants/JOB"

const TheJobReferralsPage = () => {
  const { page, status, onPreviousPage, onNextPage, onStartPage } = useJobsSearchParams()
  const { data, isJobsEmpty } = useJobsQuery(status as JOBS_STATUS_PARAMS, page)

  useEffect(() => {
    if (data && page > 1 && isJobsEmpty) {
      onStartPage()
    }
  }, [data, isJobsEmpty, onStartPage, page])

  return (
    <Stack sx={{ height: "100%", overflow: "hidden" }}>
      <TopBarWithTitle />
      <Stack
        sx={{ mx: "28px", pt: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <TabsFilter />
      </Stack>
      <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
        <TheReferralsList data={data} />
        <FooterPagination
          page={page}
          totalPage={data?.business?.jobs?.totalPages || 1}
          onPrevious={onPreviousPage}
          onNext={onNextPage}
        />
      </Stack>
    </Stack>
  )
}

export default TheJobReferralsPage
