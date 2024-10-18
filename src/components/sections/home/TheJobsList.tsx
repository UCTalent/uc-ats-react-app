import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import { Box, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import ButtonOutlined from "components/common/buttons/ButtonOutlined"
import EmptyData from "components/common/EmptyData"
import JobCard from "components/common/JobCard"
import NumberWithLabelVerticalTag from "components/common/tags/NumberWithLabelVerticalTag"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { JobsListType } from "hooks/queries/useJobsQuery"
import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import CloseJobFailed from "./modals/CloseJobFailed"
import CloseJobSuccess from "./modals/CloseJobSuccess"
import { TFunction } from "types/common"
import { Web3metaType } from "types/smart-contract"

interface IProps {
  data: JobsListType
  refetchList: TFunction
}

const TheJobsList: FC<IProps> = ({ data, refetchList }) => {
  const navigate = useNavigate()
  const [modalInfo, setModalInfo] = useState<{
    type: "success" | "failed" | null
    idJob: string
    web3meta: Web3metaType
  }>({
    type: null,
    idJob: "",
    web3meta: null,
  })
  const jobs = data?.business.jobs.jobs

  const closeModal = () => {
    setModalInfo({
      type: null,
      idJob: "",
      web3meta: null,
    })
  }

  return (
    <Stack sx={{ flexGrow: 1, pt: "12px" }}>
      {jobs && Array.isArray(jobs) && jobs.length === 0 && <EmptyData sx={{ height: "100%" }} />}
      {jobs &&
        Array.isArray(jobs) &&
        jobs.length > 0 &&
        jobs.map((job, index) => (
          <Stack
            key={job.id}
            flexDirection="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mx: "28px",
              py: "24px",
              borderBottom: index !== jobs.length - 1 && "1px solid",
              borderColor: "border.outlined",
            }}
          >
            <JobCard
              jobTitle={job.title}
              organizationName={job.organization?.name}
              organizationLogo={job.organization?.logoUrl}
              city={job.locationValue}
              country={job.country?.codeIso3}
              jobType={job.jobType}
              onClickTitle={() => navigate(PAGE_MAP.JOB_CANDIDATE(job.id.toString()))}
            />
            <Stack flexDirection="row" gap="108px" sx={{ px: "24px" }}>
              <Stack flexDirection="row" gap="10px">
                {/* <NumberWithLabelVerticalTag label="Viewed" value={100} /> */}
                <NumberWithLabelVerticalTag label="Applied" value={job.appliedNum} />
                <NumberWithLabelVerticalTag label="Hired" value={job.hiredNum} />
                <NumberWithLabelVerticalTag label="Dropped" value={job.droppedNum} />
              </Stack>
              {job.status === "published" && (
                <Box>
                  <Typography mb="10px">Choose status to close Job</Typography>
                  <Stack flexDirection="row" gap="12px">
                    <ButtonOutlined
                      customColor="success.main"
                      sx={{
                        color: "text.primary",
                        "&:hover svg": {
                          fill: "white",
                        },
                      }}
                      startIcon={<DoneRoundedIcon color="success" />}
                      onClick={() =>
                        setModalInfo({
                          type: "success",
                          idJob: job.id,
                          web3meta: job.web3meta,
                        })
                      }
                    >
                      Success
                    </ButtonOutlined>
                    <ButtonOutlined
                      customColor="error.main"
                      sx={{
                        color: "text.primary",
                        "&:hover svg": {
                          fill: "white",
                        },
                      }}
                      startIcon={<CloseRoundedIcon color="error" />}
                      onClick={() =>
                        setModalInfo({
                          type: "failed",
                          idJob: job.id,
                          web3meta: job.web3meta,
                        })
                      }
                    >
                      Failed
                    </ButtonOutlined>
                  </Stack>
                </Box>
              )}
            </Stack>
          </Stack>
        ))}
      {modalInfo.type === "success" && (
        <CloseJobSuccess jobId={modalInfo.idJob} closeModal={closeModal} />
      )}
      {modalInfo.type === "failed" && (
        <CloseJobFailed
          jobId={modalInfo.idJob}
          closeModal={closeModal}
          refetchList={refetchList}
          web3meta={modalInfo.web3meta}
        />
      )}
    </Stack>
  )
}

export default TheJobsList
