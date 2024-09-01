import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material"
import { APP_HEADER_HEIGHT } from "constants/STYLE"
import { IconJob, IconPeople, IconStoreBox } from "assets/icons"

const TheNavigateAsideBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { palette } = useTheme()

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
      sx={{ minWidth: 304, borderRight: "1px solid", borderRightColor: palette.border.outlined }}
    >
      <Stack sx={{ position: "sticky", top: APP_HEADER_HEIGHT, p: "24px", gap: "12px" }}>
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
              color: item.isActive && palette.text.accent,
              bgcolor: item.isActive && palette.background.accent,
              filter: !item.isActive && "brightness(0) contrast(100%)",
              duration: 0.2,
              "&:hover": {
                bgcolor: palette.background.accent,
                color: palette.text.accent,
                filter: "none",
              },
            }}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.title} width="24px" height="24px" />
            {item.title}
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export default TheNavigateAsideBar
