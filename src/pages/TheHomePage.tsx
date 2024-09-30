import Box from "@mui/material/Box"
import TheJobsList from "components/sections/home/TheJobsList"
import TopBarWithTitle from "components/sections/home/TopBarWithTitle"
import TabsFilter from "components/subsections/home/TabsFilter"

const TheHomePage = () => {
  return (
    <>
      <TopBarWithTitle />
      <TabsFilter />
      <TheJobsList />
      <Box
        sx={{
          minHeight: 40,
          px: "28px",
          position: "sticky",
          bottom: 0,
          bgcolor: "background.accent",
        }}
      ></Box>
    </>
  )
}

export default TheHomePage
