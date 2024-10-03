import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import usePersistState from "hooks/usePersistState"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import IconJob from "assets/icons/job.svg"
import IconPeople from "assets/icons/people.svg"
import IconStoreBox from "assets/icons/store-box.svg"
import IconSVG from "components/common/IconSVG"
import IconCollapseExpand from "assets/icons/back-arrow.svg"
import { ASIDE_NAVIGATE_COLLAPSE_WIDTH, ASIDE_NAVIGATE_WIDTH } from "constants/STYLE"
import { STORAGE_NAV_EXPANDED } from "constants/STORAGE_KEY"

const NavigateAsideBarCollapseExpand = () => {
  const [isExpanded, setIsExpanded] = usePersistState(STORAGE_NAV_EXPANDED, false)
  const [isTextVisible, setIsTextVisible] = useState(() => isExpanded)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setIsTextVisible(true), 200)
    } else {
      setIsTextVisible(false)
    }
  }, [isExpanded])

  const navigateList = useMemo(
    () => [
      {
        title: "Jobs",
        path: "/",
        icon: IconJob,
        isActive: pathname.startsWith("/"),
      },
      {
        title: "Candidates",
        path: "/candidates",
        icon: IconPeople,
        isActive: pathname.startsWith("/candidates"),
      },
      {
        title: "Drafts",
        path: "/drafts",
        icon: IconStoreBox,
        isActive: pathname.startsWith("/drafts"),
      },
    ],
    [pathname]
  )

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        width: isExpanded ? ASIDE_NAVIGATE_WIDTH : ASIDE_NAVIGATE_COLLAPSE_WIDTH,
        minWidth: isExpanded ? ASIDE_NAVIGATE_WIDTH : ASIDE_NAVIGATE_COLLAPSE_WIDTH,
        borderRight: "1px solid",
        borderRightColor: "border.outlined",
        bgcolor: "background.accent",
        transitionDuration: "200ms",
      }}
    >
      <Stack sx={{ position: "sticky", top: 0, py: "24px", px: "12px", gap: "12px" }}>
        {navigateList.map((item) => (
          <Stack
            key={item.title}
            flexDirection="row"
            sx={{
              height: "44px",
              alignItems: "center",
              gap: "12px",
              borderRadius: "12px",
              px: "16px",
              cursor: "pointer",
              color: item.isActive && "text.accent",
              bgcolor: item.isActive && "background.accentSelected",
              filter: !item.isActive && "brightness(0) contrast(100%)",
              duration: "200ms",
              "&:hover": {
                bgcolor: "background.accentSelected",
                color: "text.accent",
                filter: "none",
              },
            }}
            onClick={() => navigate(item.path)}
          >
            <IconSVG src={item.icon} alt={item.title} width="24px" height="24px" />
            {isTextVisible && <Box component="span">{item.title}</Box>}
          </Stack>
        ))}
      </Stack>
      <Stack sx={{ py: "8px", px: "12px", alignItems: "end" }}>
        <IconButton
          sx={{
            width: `calc(${ASIDE_NAVIGATE_COLLAPSE_WIDTH}px - 12px * 2)`,
            height: `calc(${ASIDE_NAVIGATE_COLLAPSE_WIDTH}px - 12px * 2)`,
          }}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <IconSVG
            src={IconCollapseExpand}
            style={{ transform: !isExpanded && "rotate(180deg)", transitionDuration: "200ms" }}
          />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default NavigateAsideBarCollapseExpand
