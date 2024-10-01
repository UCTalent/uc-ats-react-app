import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ASIDE_NAVIGATE_COLLAPSE_WIDTH } from "constants/STYLE"
import IconJob from "assets/icons/job.svg"
import IconPeople from "assets/icons/people.svg"
import IconStoreBox from "assets/icons/store-box.svg"

const TheNavigateAsideCollapseBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

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
    <Box
      sx={{
        minWidth: ASIDE_NAVIGATE_COLLAPSE_WIDTH,
        maxWidth: ASIDE_NAVIGATE_COLLAPSE_WIDTH,
        width: "100%",
        borderRight: "1px solid",
        borderLeft: "1px solid",
        borderColor: "border.outlined",
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
              gap: "4px",
              borderRadius: "12px",
              px: "16px",
              cursor: "pointer",
              color: item.isActive && "text.accent",
              bgcolor: item.isActive && "background.accentSelected",
              filter: !item.isActive && "brightness(0) contrast(100%)",
              duration: 0.2,
              "&:hover": {
                bgcolor: "background.accentSelected",
                color: "text.accent",
                filter: "none",
              },
            }}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.title} width="24px" height="24px" />
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export default TheNavigateAsideCollapseBar
