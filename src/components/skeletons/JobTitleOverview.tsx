import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

const JobTitleOverview = () => {
  return (
    <Stack gap="4px">
      <Skeleton width={240} height={40} />
      <Skeleton width={480} />
    </Stack>
  )
}

export default JobTitleOverview
