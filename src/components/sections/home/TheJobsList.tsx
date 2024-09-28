import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import Stack from "@mui/material/Stack"
import CalendarBox from "components/common/CalendarBox"
import JobCard from "components/common/JobCard"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { PAGE_MAP } from "constants/PAGE_MAP"

const TheJobsList = () => {
  const navigate = useNavigate()

  const statusFilterElements = useMemo(() => {
    const statusList = [
      { id: "active", title: "Active", index: 0, action: () => {} },
      { id: "close", title: "Closed", index: 1, action: () => {} },
      { id: "pending", title: "Pending", index: 2, action: () => {} },
    ]
    return (
      <Tabs
        value={0}
        onChange={() => {}}
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ px: "28px" }}
      >
        {statusList.map((item, index) => (
          <Tab
            key={item.id}
            label={
              <Stack flexDirection="row" alignItems="center" gap="4px" sx={{ fontWeight: 600 }}>
                {item.title}
              </Stack>
            }
            id={`simple-tab-${index}`}
            aria-controls={`simple-tabpanel-${index}`}
            sx={{
              textTransform: "none",
              px: "16px",
              mr: index !== statusList.length - 1 && "12px",
            }}
          />
        ))}
      </Tabs>
    )
  }, [])

  return (
    <Stack sx={{ flexGrow: 1, py: "24px", gap: "24px" }}>
      {statusFilterElements}
      <Stack gap="24px">
        {Array.from({ length: 12 }).map((item, index) => (
          <Stack
            key={index}
            flexDirection="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              px: "28px",
              py: "18px",
              cursor: "pointer",
              transitionDuration: "0.1s",
              "&:hover": { backgroundColor: "background.accent" },
            }}
            onClick={() => navigate(PAGE_MAP.JOB_CANDIDATE(index.toString()))}
          >
            <JobCard />
            <Stack flexDirection="row" gap="10px">
              <CalendarBox label="Total" content="100" color="blue" />
              <CalendarBox label="Applied" content="100" color="green" />
              <CalendarBox label="Waiting" content="100" color="red" />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default TheJobsList
