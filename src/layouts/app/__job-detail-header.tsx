import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { Outlet } from "react-router-dom"
import Stack from "@mui/material/Stack"
import TitleOverview from "components/sections/job-detail/TitleOverview"
import TabMenuHorizontal from "components/sections/job-detail/TabMenuHorizontal"
import { jobOverviewAtom } from "store/jobOverviewAtom"

const JobDetailHeaderLayout = () => {
  const [jobOverview, setJobOverview] = useRecoilState(jobOverviewAtom)

  useEffect(() => {
    return () => {
      setJobOverview(null)
    }
  }, [setJobOverview])

  return (
    <>
      <TitleOverview jobOverview={jobOverview} sx={{ mt: "12px", mb: "20px", px: "20px" }} />
      <Stack sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Stack
          flexDirection="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "border.outlined",
            mx: "20px",
          }}
        >
          <TabMenuHorizontal />
        </Stack>
        <Outlet />
      </Stack>
    </>
  )
}

export default JobDetailHeaderLayout
