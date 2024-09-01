import { useMemo } from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

interface IProps {
  label: string
  content: string
  color?: "blue" | "green" | "red"
}

const CalendarBox: React.FC<IProps> = ({ label, content, color = "blue" }) => {
  const labelColor = useMemo(
    () =>
      ({
        blue: "#0B79D0",
        green: "#14B8A6",
        red: "#E11900",
      })[color],
    [color]
  )

  return (
    <Stack
      sx={{
        height: "69px",
        width: "86px",
        fontSize: "14px",
        fontWeight: 500,
        borderRadius: "8px",
        boxShadow: "-1px 1px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          height: "22px",
          borderRadius: "8px 8px 0 0",
          bgcolor: labelColor,
          color: "white",
          textAlign: "center",
        }}
      >
        {label}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0 0 8px 8px",
        }}
      >
        {content}
      </Box>
    </Stack>
  )
}

export default CalendarBox
