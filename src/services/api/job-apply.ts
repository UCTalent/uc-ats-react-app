import axiosBasic from "services/axios/axiosBasic"
import { APIRes } from "types/api"
import { IUpdateJobApplyStatusRequest, IUpdateJobApplyStatusResponse } from "types/api/job-apply"

const updateJobApplyStatus = (
  id: string,
  body: IUpdateJobApplyStatusRequest
): Promise<APIRes<IUpdateJobApplyStatusResponse>> => {
  const url = `/job_applies/${id}/update_status`
  return axiosBasic.patch(url, body)
}

const JobApplyAPI = {
  updateJobApplyStatus,
}

export default JobApplyAPI
