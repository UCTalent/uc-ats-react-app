import Box from "@mui/material/Box"
import { FC } from "react"

interface IProps {
  pdfUrl: string
}

const PdfViewer: FC<IProps> = ({ pdfUrl }) => {
  return (
    <Box sx={{ width: "100%", height: "100%", "& iframe": { width: "100%", height: "100%" } }}>
      <iframe src={pdfUrl}>Please reload</iframe>
    </Box>
  )
}

export default PdfViewer
