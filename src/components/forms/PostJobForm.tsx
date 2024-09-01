import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const PostJobForm = () => {
  return (
    <Stack sx={{ px: "24px", gap: "24px" }}>
      <TextField label="Job Title" placeholder="Job Title" />
      <TextField label="Company Name" placeholder="Job Type" />
      <TextField label="Add Location" placeholder="Location" />
      <TextField label="Headcount" placeholder="Description" />
      <Button variant="contained" sx={{ width: "100%" }}>
        Post Job
      </Button>
    </Stack>
  )
}

export default PostJobForm
