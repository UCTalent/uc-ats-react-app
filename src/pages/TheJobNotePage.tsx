import Stack from "@mui/material/Stack"
import RichTextEditor from "components/common/form-fields/RichTextEditor"

const TheJobNotePage = () => {
  return (
    <Stack sx={{ height: "100%", justifyContent: "space-between", py: "16px", px: "20px" }}>
      <Stack></Stack>
      <RichTextEditor />
    </Stack>
  )
}

export default TheJobNotePage
