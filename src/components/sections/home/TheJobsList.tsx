import Stack from "@mui/material/Stack"
import { useMemo } from "react"
import { ButtonOutlined, JobCard, CalendarBox } from "components/common"

const TheJobsList = () => {
  const statusFilterElements = useMemo(() => {
    const statusList = [
      { name: "Active", action: () => {} },
      { name: "Closed", action: () => {} },
      { name: "Pending", action: () => {} },
    ]
    return (
      <Stack flexDirection="row" gap="18px">
        {statusList.map((status) => (
          <ButtonOutlined key={status.name} customColor="black">
            {status.name}
          </ButtonOutlined>
        ))}
      </Stack>
    )
  }, [])

  return (
    <Stack sx={{ flexGrow: 1, px: "28px", py: "24px", gap: "24px" }}>
      {statusFilterElements}
      <Stack gap="24px">
        {Array.from({ length: 12 }).map((item, index) => (
          <Stack
            key={index}
            flexDirection="row"
            sx={{ alignItems: "center", justifyContent: "space-between", py: "18px" }}
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
