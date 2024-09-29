import { useMemo, useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Stack from "@mui/material/Stack"

const TabsFilter = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const statusList = useMemo(
    () => [
      {
        id: "active",
        title: "Active",
        index: 0,
        action: () => {},
        color: "rgba(41, 150, 1, 1)",
      },
      { id: "closed", title: "Closed", index: 1, action: () => {}, color: "rgba(254, 158, 31, 1)" },
      {
        id: "pending",
        title: "Pending",
        index: 2,
        action: () => {},
        color: "rgba(11, 121, 208, 1)",
      },
    ],
    []
  )

  return (
    <Tabs
      value={activeTabIndex}
      onChange={(_, newValue) => setActiveTabIndex(newValue)}
      sx={{
        px: "28px",
        mt: "24px",
        "& .Mui-selected": {
          color: statusList[activeTabIndex].color,
        },
        "& .MuiTabs-indicator": {
          backgroundColor: statusList[activeTabIndex].color,
        },
      }}
    >
      {statusList.map((item, index) => (
        <Tab
          key={item.id}
          label={
            <Stack
              flexDirection="row"
              alignItems="center"
              gap="4px"
              sx={{
                fontWeight: 600,
                color: item.index === activeTabIndex && item.color,
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
            mr: index !== statusList.length - 1 && "12px",
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabsFilter
