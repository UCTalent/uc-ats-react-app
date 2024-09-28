import { useCallback, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { createPortal } from "react-dom"
import useClickOutside from "hooks/useClickOutside"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import IconSVG from "components/common/IconSVG"
import IconChevronRight from "assets/icons/chevron-down.svg"

const RightSidePortalWithOverlayLayout = () => {
  const navigate = useNavigate()
  const [isActivePage, setIsActivePage] = useState(false)
  const { ref: clickOutsideRef } = useClickOutside(() => setIsActivePage(false))

  useEffect(() => {
    setIsActivePage(true)
  }, [])

  const navigateBack = useCallback(() => {
    if (isActivePage) return
    navigate(-1)
  }, [isActivePage, navigate])

  return createPortal(
    <Stack
      sx={{
        alignItems: "end",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
        backgroundColor: isActivePage ? "background.overlay" : "transparent",
        transition: "backgroundColor 200ms ease-in-out",
        zIndex: 9999,
      }}
    >
      <Stack
        ref={clickOutsideRef}
        sx={{
          height: "100%",
          minWidth: "888px",
          bgcolor: "background.default",
          transform: isActivePage ? "translateX(0)" : "translateX(100%)",
          transition: "transform 200ms ease-in-out",
        }}
        onTransitionEnd={navigateBack}
      >
        <Outlet />
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "36px",
            height: "36px",
            transform: "translate(-50%,-50%)",
            bgcolor: "background.default",
            "&:hover": { bgcolor: "background.default" },
            border: "1px solid",
            borderColor: "border.outlined",
          }}
          onClick={() => setIsActivePage(false)}
        >
          <IconSVG
            src={IconChevronRight}
            alt="close"
            width={24}
            height={24}
            style={{ transform: "rotate(-90deg)" }}
          />
        </IconButton>
      </Stack>
    </Stack>,
    document.body
  )
}

export default RightSidePortalWithOverlayLayout
