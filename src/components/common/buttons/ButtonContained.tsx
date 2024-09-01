import MuiButton from "@mui/material/Button"
import { useTheme, type ButtonProps } from "@mui/material"

interface IProps extends ButtonProps {
  startIconSrc?: string
}

const ButtonContained: React.FC<IProps> = ({ children, startIconSrc, sx, ...props }) => {
  const { palette } = useTheme()

  return (
    <MuiButton
      sx={{
        height: "48px",
        px: "22px",
        borderRadius: "999px",
        bgcolor: palette.primary.main,
        color: palette.white,
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
          bgcolor: palette.primary.main,
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

export default ButtonContained
