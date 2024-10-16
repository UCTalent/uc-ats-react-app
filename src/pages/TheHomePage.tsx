import { useEffect } from "react"
import Stack from "@mui/material/Stack"
import TheJobsList from "components/sections/home/TheJobsList"
import TopBarWithTitle from "components/sections/home/TopBarWithTitle"
import TabsFilter from "components/subsections/home/TabsFilter"
import FooterPagination from "components/sections/home/FooterPagination"
import useJobsSearchParams from "hooks/useJobsSearchParams"
import useJobsQuery from "hooks/queries/useJobsQuery"
import { JOBS_STATUS_PARAMS } from "constants/JOB"

const TheHomePage = () => {
  const { page, status, onPreviousPage, onNextPage, onStartPage, onChangeStatus } =
    useJobsSearchParams()
  const { data, isJobsEmpty } = useJobsQuery(status as JOBS_STATUS_PARAMS, page)

  useEffect(() => {
    if (data && page > 1 && isJobsEmpty) {
      onStartPage()
    }
  }, [data, isJobsEmpty, onStartPage, page])

  return (
    <Stack sx={{ height: "100%", overflow: "hidden" }}>
      <TopBarWithTitle />
      <Stack sx={{ mx: "28px", pt: "24px" }}>
        <TabsFilter status={status as JOBS_STATUS_PARAMS} onChangeStatus={onChangeStatus} />
      </Stack>
      <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
        <TheJobsList data={data} />
        <FooterPagination
          page={page}
          totalPage={data?.business?.jobs?.totalPages}
          onPrevious={onPreviousPage}
          onNext={onNextPage}
        />
      </Stack>
    </Stack>
  )
}

export default TheHomePage
