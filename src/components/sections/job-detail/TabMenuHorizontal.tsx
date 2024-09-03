import { useMemo, useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { IconCandidates, IconInfo, IconNote } from "assets/icons"
import { IconSVG } from "components/common"

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    sx: { textTransform: "none" },
  }
}

const TabMenuHorizontal = () => {
  const [value, setValue] = useState(0)

  const tabMenuElements = useMemo(() => {
    const menu = [
      { id: "candidates", icon: IconCandidates, text: "Candidates" },
      { id: "info", icon: IconInfo, text: "Info" },
      { id: "notes", icon: IconNote, text: "Notes" },
    ]
    return menu.map((item, index) => (
      <Tab
        key={item.id}
        label={
          <Stack flexDirection="row" alignItems="center" gap="4px">
            <IconSVG
              src={item.icon}
              alt={item.text}
              width={20}
              height={20}
              style={{ filter: index === value && "brightness(0) contrast(100%)" }}
            />{" "}
            {item.text}
          </Stack>
        }
        {...a11yProps(index)}
      />
    ))
  }, [value])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", mb: "16px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "border.outlined" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {tabMenuElements}
        </Tabs>
      </Box>
    </Box>
  )
}

export default TabMenuHorizontal
