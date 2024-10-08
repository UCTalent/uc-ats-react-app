import MuiButton from "@mui/material/Button"
import { type ButtonProps } from "@mui/material"

interface IProps extends ButtonProps {
  startIconSrc?: string
}

const ButtonContained: React.FC<IProps> = ({ children, startIconSrc, sx, ...props }) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        height: "48px",
        px: "22px",
        borderRadius: "999px",
        bgcolor: "primary.main",
        color: "white",
        textTransform: "none",
        fontWeight: 600,
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
