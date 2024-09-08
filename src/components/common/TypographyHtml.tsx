import Typography from "@mui/material/Typography"
import { sanitizeHTMLBasic } from "services/sanitizeHTML"
import { type SxProps } from "@mui/material"

interface TypeProps {
  children: string
  sx?: SxProps
}

const TypographyHtml: React.FC<TypeProps> = ({ children, sx }) => {
  return (
    <Typography
      component="div"
      dangerouslySetInnerHTML={{
        __html: sanitizeHTMLBasic(children),
      }}
      sx={sx}
    />
  )
}

export default TypographyHtml
