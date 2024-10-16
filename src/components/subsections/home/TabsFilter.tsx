import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Stack from "@mui/material/Stack"
import type { SxProps } from "@mui/material"
import { JOBS_STATUS_PARAMS } from "constants/JOB"

interface IProps {
  status: JOBS_STATUS_PARAMS
  onChangeStatus: (status: JOBS_STATUS_PARAMS) => void
  sx?: SxProps
}

const STATUS_LIST = [
  {
    id: JOBS_STATUS_PARAMS.ACTIVE,
    index: 0,
    title: "Active",
    color: "rgba(41, 150, 1, 1)",
  },
  {
    id: JOBS_STATUS_PARAMS.CLOSED,
    index: 1,
    title: "Closed",
    color: "rgba(254, 158, 31, 1)",
  },
  {
    id: JOBS_STATUS_PARAMS.PENDING,
    index: 2,
    title: "Pending",
    color: "rgba(11, 121, 208, 1)",
  },
  {
    id: JOBS_STATUS_PARAMS.COMPLETING,
    index: 3,
    title: "Completing",
    color: "rgba(183, 31, 254, 1)",
  },
]

const TabsFilter: React.FC<IProps> = ({ status, onChangeStatus, sx }) => {
  const [activeTabId, setActiveTabId] = useState(() => {
    const activeStatusIndex = STATUS_LIST.findIndex((item) => item.id === status)
    return activeStatusIndex !== -1 ? activeStatusIndex : 0
  })

  const handleChangeStatus = (index: number) => {
    const activeStatusId = STATUS_LIST[index]?.id
    if (activeStatusId) onChangeStatus(activeStatusId)
  }

  return (
    <Tabs
      value={activeTabId}
      onChange={(_, newValue) => {
        setActiveTabId(newValue)
        handleChangeStatus(newValue)
      }}
      sx={{
        bgcolor: "background.default",
        "& .Mui-selected": {
          color: `${STATUS_LIST[activeTabId]?.color} !important`,
        },
        "& .MuiTabs-indicator": {
          backgroundColor: STATUS_LIST[activeTabId]?.color,
        },
        zIndex: 10,
        ...sx,
      }}
    >
      {STATUS_LIST.map((item, index) => (
        <Tab
          key={item.index}
          label={
            <Stack
              flexDirection="row"
              alignItems="center"
              gap="4px"
              sx={{
                fontWeight: 600,
                color: item.index === activeTabId && item?.color,
              }}
            >
              {item.title}
            </Stack>
          }
          id={`simple-tab-${index}`}
          aria-controls={`simple-tabpanel-${index}`}
          sx={{
            textTransform: "none",
            px: "16px",
            mr: index !== STATUS_LIST.length - 1 && "12px",
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabsFilter
