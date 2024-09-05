import Box from "@mui/material/Box"
import { TopBarWithTitle, TheJobsList } from "components/sections/home"

const TheHomePage = () => {
  return (
    <>
      <TopBarWithTitle />
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
