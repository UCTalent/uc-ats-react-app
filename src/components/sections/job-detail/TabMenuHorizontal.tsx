import { useCallback, useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Stack from "@mui/material/Stack"
import { IconCandidates, IconInfo, IconNote } from "assets/icons"
import { IconSVG } from "components/common"
import { PAGE_MAP } from "constants/PAGE_MAP"

const TabMenuHorizontal = () => {
  const { id: jobId } = useParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const menu = useMemo(
    () => [
      {
        id: "candidates",
        icon: IconCandidates,
        title: "Candidates",
        path: PAGE_MAP.JOB_CANDIDATE(jobId),
        index: 0,
        disabled: false,
      },
      {
        id: "info",
        icon: IconInfo,
        title: "Info",
        path: PAGE_MAP.JOB_DETAIL(jobId),
        index: 1,
        disabled: false,
      },
      {
        id: "notes",
        icon: IconNote,
        title: "Notes",
        path: PAGE_MAP.JOB_NOTE(jobId),
        index: 2,
        disabled: true,
      },
    ],
    [jobId]
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
    >
      {menu.map((item, index) => (
        <Tab
          key={item.id}
          label={
            <Stack flexDirection="row" alignItems="center" gap="4px">
              <IconSVG
                src={item.icon}
                alt={item.title}
                width={20}
                height={20}
                style={{
                  filter: index === activeTabIndex && "brightness(0) contrast(100%)",
                  opacity: item.disabled && 0.4,
                }}
              />
              {item.title}
            </Stack>
          }
          id={`simple-tab-${index}`}
          aria-controls={`simple-tabpanel-${index}`}
          disabled={item.disabled}
        />
      ))}
    </Tabs>
  )
}

export default TabMenuHorizontal
