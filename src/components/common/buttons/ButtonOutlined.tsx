import MuiButton from "@mui/material/Button"
import { type ButtonProps } from "@mui/material"
import { useMemo } from "react"

interface IProps extends ButtonProps {
  startIconSrc?: string
  customColor?: string
}

const ButtonOutlined: React.FC<IProps> = ({
  children,
  startIconSrc,
  customColor,
  sx,
  ...props
}) => {
  const finalColor = useMemo(() => customColor || "primary.main", [customColor])

  return (
    <MuiButton
      sx={{
        height: "48px",
        px: "22px",
        borderRadius: "999px",
        color: finalColor,
        border: `1px solid`,
        borderColor: finalColor,
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
          bgcolor: finalColor,
          color: "white",
        },
        ...sx,
      }}
      {...props}
    >
      {startIconSrc && (
        <img
          src={startIconSrc}
          alt="icon"
          width="20px"
          height="20px"
          style={{ marginRight: "6px" }}
        />
      )}
      {children}
    </MuiButton>
  )
}

export default ButtonOutlined
