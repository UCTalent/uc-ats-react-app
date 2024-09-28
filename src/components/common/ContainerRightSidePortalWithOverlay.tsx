import { useCallback, useEffect, useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { createPortal } from "react-dom"
import useClickOutside from "hooks/useClickOutside"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import IconSVG from "components/common/IconSVG"
import IconChevronRight from "assets/icons/chevron-down.svg"

const TRANSITION_DURATION = 200

interface IProps {
  children: ReactNode
  backPath: string
}

const ContainerRightSidePortalWithOverlay: React.FC<IProps> = ({ children, backPath }) => {
  const navigate = useNavigate()
  const [isActivePage, setIsActivePage] = useState(false)

  useEffect(() => {
    setIsActivePage(true)
  }, [])

  const navigateBack = useCallback(() => {
    setIsActivePage(false)
    setTimeout(() => navigate(backPath), TRANSITION_DURATION)
  }, [backPath, navigate])

  const { ref: clickOutsideRef } = useClickOutside(navigateBack)

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
        transition: `backgroundColor ${TRANSITION_DURATION}ms ease-in-out`,
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
          transition: `transform ${TRANSITION_DURATION}ms ease-in-out`,
        }}
      >
        {children}
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
          onClick={navigateBack}
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

export default ContainerRightSidePortalWithOverlay
