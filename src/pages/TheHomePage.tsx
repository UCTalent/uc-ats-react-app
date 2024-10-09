import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import TheJobsList from "components/sections/home/TheJobsList"
import TopBarWithTitle from "components/sections/home/TopBarWithTitle"
import TabsFilter from "components/subsections/home/TabsFilter"
import useJobsQuery from "hooks/queries/useJobsQuery"
// import type { TheHomePageQuery as TheHomePageQueryType } from "./__generated__/TheHomePageQuery.graphql"

const TheHomePage = () => {
  const { data } = useJobsQuery()

  return (
    <Stack sx={{ height: "100%", overflow: "hidden" }}>
      <TopBarWithTitle />
      <Stack
        sx={{
          mx: "28px",
          pt: "24px",
          // width: "fit-content",
          // borderBottom: "1px solid",
          // borderColor: "border.outlined",
        }}
      >
        <TabsFilter />
      </Stack>
      <Stack sx={{ flexGrow: 1, overflow: "auto" }}>
        <TheJobsList data={data} />
        <Box
          sx={{
            minHeight: "40px",
            px: "28px",
            position: "sticky",
            bottom: 0,
            bgcolor: "background.accent",
          }}
        ></Box>
      </Stack>
    </Stack>
  )
}

export default TheHomePage
