import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import Stack from "@mui/material/Stack"
import ButtonOutlined from "components/common/buttons/ButtonOutlined"
import CalendarBox from "components/common/CalendarBox"
import JobCard from "components/common/JobCard"
import { PAGE_MAP } from "constants/PAGE_MAP"

const TheJobsList = () => {
  const navigate = useNavigate()

  const statusFilterElements = useMemo(() => {
    const statusList = [
      { name: "Total", action: () => {} },
      { name: "Hired", action: () => {} },
      { name: "Dropped", action: () => {} },
    ]
    return (
      <Stack flexDirection="row" gap="18px" sx={{ px: "28px" }}>
        {statusList.map((status) => (
          <ButtonOutlined key={status.name} customColor="black">
            {status.name}
          </ButtonOutlined>
        ))}
      </Stack>
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
