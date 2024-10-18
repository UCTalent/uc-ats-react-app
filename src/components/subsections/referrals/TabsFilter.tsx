import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Stack from "@mui/material/Stack"
import type { SxProps } from "@mui/material"
// import { JOBS_STATUS_PARAMS } from "constants/JOB"

interface IProps {
  // status: JOBS_STATUS_PARAMS
  // onChangeStatus: (status: JOBS_STATUS_PARAMS) => void
  sx?: SxProps
}

const STATUS_LIST = [
  {
    id: 0,
    index: 0,
    title: "Saved",
    color: "rgba(41, 150, 1, 1)",
  },
  {
    id: 1,
    index: 1,
    title: "Applied",
    color: "rgba(254, 158, 31, 1)",
  },
  {
    id: 2,
    index: 2,
    title: "Interviewing",
    color: "rgba(11, 121, 208, 1)",
  },
  {
    id: 3,
    index: 3,
    title: "Hired",
    color: "rgba(183, 31, 254, 1)",
  },
  {
    id: 4,
    index: 4,
    title: "Completed",
    color: "rgba(183, 31, 254, 1)",
  },
  {
    id: 5,
    index: 5,
    title: "Not Selected",
    color: "rgba(183, 31, 254, 1)",
  },
]

const TabsFilter: React.FC<IProps> = ({ sx }) => {
  const [activeTabId, setActiveTabId] = useState(() => {
    // const activeStatusIndex = STATUS_LIST.findIndex((item) => item.id === status)
    // return activeStatusIndex !== -1 ? activeStatusIndex : 0
    return 0
  })

  // const handleChangeStatus = (index: number) => {
  //   const activeStatusId = STATUS_LIST[index]?.id
  //   if (activeStatusId) onChangeStatus(activeStatusId)
  // }

  return (
    <Tabs
      value={activeTabId}
      onChange={(_, newValue) => {
        setActiveTabId(newValue)
        // handleChangeStatus(newValue)
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
