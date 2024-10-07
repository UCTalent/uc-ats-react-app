import { useCallback, useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { PAGE_MAP } from "constants/PAGE_MAP"

const TabMenuHorizontal = () => {
  const { jobId, candidateId } = useParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const menu = useMemo(
    () => [
      {
        id: "summary",
        title: "Summary",
        path: PAGE_MAP.JOB_CANDIDATE_SUMMARY(jobId, candidateId),
        index: 0,
        disabled: false,
      },
      // {
      //   id: "resume",
      //   title: "Resume",
      //   path: PAGE_MAP.JOB_CANDIDATE_RESUME(jobId, candidateId),
      //   index: 1,
      //   disabled: false,
      // },
      // {
      //   id: "notes",
      //   title: "Notes",
      //   path: PAGE_MAP.JOB_CANDIDATE_NOTES(jobId, candidateId),
      //   index: 2,
      //   disabled: false,
      // },
      // {
      //   id: "jobs",
      //   title: "Jobs",
      //   path: PAGE_MAP.JOB_CANDIDATE_JOBS(jobId, candidateId),
      //   index: 3,
      //   disabled: false,
      // },
    ],
    [candidateId, jobId]
  )

  const activeTabIndex = useMemo(() => {
    const tab = menu.find((item) => pathname.includes(item.id))
    return tab ? tab.index : 0
  }, [pathname, menu])

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      navigate(menu[newValue].path)
    },
    [navigate, menu]
  )

  return (
    <Tabs
      value={activeTabIndex}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      sx={{
        width: "fit-content",
        borderBottom: "1px solid",
        borderColor: "border.outlined",
        mx: "16px",
      }}
    >
      {menu.map((item, index) => (
        <Tab
          key={item.id}
          label={
            <Stack flexDirection="row" alignItems="center" gap="4px">
              {item.title}
            </Stack>
          }
          id={`simple-tab-${index}`}
          aria-controls={`simple-tabpanel-${index}`}
          disabled={item.disabled}
          sx={{ textTransform: "none" }}
        />
      ))}
    </Tabs>
  )
}

export default TabMenuHorizontal
