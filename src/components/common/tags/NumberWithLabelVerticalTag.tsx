import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface IProps {
  label: string
  value: number
  color?: "blue" | "green" | "red"
}

const NumberWithLabelVerticalTag: React.FC<IProps> = ({ label, value }) => {
  return (
    <Stack alignItems="center" gap="6px" sx={{ minWidth: "84px" }}>
      <Typography sx={{ fontSize: "14px", color: "text.ter" }}>{label}</Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{value.toLocaleString()}</Typography>
    </Stack>
  )
}

export default NumberWithLabelVerticalTag
