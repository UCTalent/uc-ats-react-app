import { SxProps } from "@mui/material"
import Stack from "@mui/material/Stack"
import IMGGirlWithLaptop from "assets/images/juicy-girl-with-laptop.webp"
import { FC } from "react"

interface IProps {
  sx?: SxProps
}

const EmptyData: FC<IProps> = ({ sx }) => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center", gap: "16px", ...sx }}>
      <img src={IMGGirlWithLaptop} alt="empty-data" width={190} />
      <span>Empty data</span>
    </Stack>
  )
}

export default EmptyData
