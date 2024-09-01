import MuiButton from "@mui/material/Button"
import { useTheme, type ButtonProps } from "@mui/material"
import { useMemo } from "react"

interface IProps extends ButtonProps {
  startIconSrc?: string
  customColor?: string
}

const ButtonOutlined: React.FC<IProps> = ({ children, startIconSrc, customColor, ...props }) => {
  const { palette } = useTheme()

  const finalColor = useMemo(
    () => customColor || palette.primary.main,
    [customColor, palette.primary.main]
  )

  return (
    <MuiButton
      sx={{
        height: "48px",
        px: "22px",
        borderRadius: "999px",
        color: finalColor,
        border: `1px solid ${finalColor}`,
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
          bgcolor: finalColor,
          color: "white",
        },
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
