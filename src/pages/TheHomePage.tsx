import Stack from "@mui/material/Stack"
import TheJobsList from "components/sections/home/TheJobsList"
import TopBarWithTitle from "components/sections/home/TopBarWithTitle"
import TabsFilter from "components/subsections/home/TabsFilter"
import FooterPagination from "components/sections/home/FooterPagination"
import useCurrentUserAtom from "hooks/atoms/useCurrentUserAtom"
import useJobsPagination from "hooks/useJobsPagination"
import useJobsQuery from "hooks/queries/useJobsQuery"

const TheHomePage = () => {
  const { currentUser } = useCurrentUserAtom()
  const { page, onPreviousPage, onNextPage } = useJobsPagination()
  const { data } = useJobsQuery(page)

  console.log(currentUser)

  return (
    <Stack sx={{ height: "100%", overflow: "hidden" }}>
      <TopBarWithTitle />
      <Stack sx={{ mx: "28px", pt: "24px" }}>
        <TabsFilter />
      </Stack>
      <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
        <TheJobsList data={data} />
        <FooterPagination page={page} onPrevious={onPreviousPage} onNext={onNextPage} />
      </Stack>
    </Stack>
  )
}

export default TheHomePage
