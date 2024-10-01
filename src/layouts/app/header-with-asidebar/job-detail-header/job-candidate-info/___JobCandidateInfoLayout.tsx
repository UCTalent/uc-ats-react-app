import { Outlet, useParams } from "react-router-dom"
import Stack from "@mui/material/Stack"
import UserAvatarWithDetails from "components/common/user-avatar/UserAvatarWithDetails"
import TabMenuHorizontal from "components/sections/job-detail/job-candidate/TabMenuHorizontal"
import ContainerRightSidePortalWithOverlay from "components/common/ContainerRightSidePortalWithOverlay"
import { PAGE_MAP } from "constants/PAGE_MAP"

const JobCandidateInfoLayout = () => {
  const { jobId } = useParams()
  return (
    <ContainerRightSidePortalWithOverlay backPath={PAGE_MAP.JOB_CANDIDATE(jobId)}>
      <Stack sx={{ maxWidth: "888px", height: "100%", px: "12px", py: "12px", boxShadow: 10 }}>
        <Stack
          flexDirection="row"
          alignItems="center"
          gap="16px"
          sx={{
            borderBottom: "1px solid",
            borderColor: "border.outlined",
          }}
        >
          <UserAvatarWithDetails />
        </Stack>
        <TabMenuHorizontal />
        <Stack sx={{ flexGrow: 1, pt: "36px", pb: "32px", px: "56px", overflow: "auto" }}>
          <Outlet />
        </Stack>
      </Stack>
    </ContainerRightSidePortalWithOverlay>
  )
}

export default JobCandidateInfoLayout
