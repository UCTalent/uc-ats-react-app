import { useNavigate } from "react-router-dom"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import TabsFilter from "components/subsections/home/TabsFilter"
import JobCard from "components/common/JobCard"
import NumberWithLabelVerticalTag from "components/common/tags/NumberWithLabelVerticalTag"
import IconSVG from "components/common/IconSVG"
import IconThreeDotsHorizontal from "assets/icons/three-dots-horizontal.svg"
import { PAGE_MAP } from "constants/PAGE_MAP"

const TheJobsList = () => {
  const navigate = useNavigate()

  return (
    <Stack sx={{ flexGrow: 1 }}>
      <TabsFilter />
      <Stack sx={{ pt: "12px" }}>
        {Array.from({ length: 12 }).map((item, index) => (
          <Stack
            key={index}
            flexDirection="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mx: "28px",
              py: "24px",
              borderBottom: index !== 11 && "1px solid",
              borderColor: "border.outlined",
            }}
          >
            <JobCard onClickTitle={() => navigate(PAGE_MAP.JOB_CANDIDATE(index.toString()))} />
            <Stack flexDirection="row" gap="108px" sx={{ px: "24px" }}>
              <Stack flexDirection="row" gap="10px">
                <NumberWithLabelVerticalTag label="Viewed" value={100} />
                <NumberWithLabelVerticalTag label="Applied" value={100} />
                <NumberWithLabelVerticalTag label="Hired" value={100} />
                <NumberWithLabelVerticalTag label="Dropped" value={100} />
              </Stack>
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconSVG src={IconThreeDotsHorizontal} alt="Options" />
              </IconButton>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default TheJobsList
