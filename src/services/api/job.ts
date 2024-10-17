import axiosBasic from "services/axios/axiosBasic"
import { APIRes } from "types/api"
import { JobAppliesRequest } from "types/api/job"

const updateJobApplies = (
  idJobApplies: string,
  body: JobAppliesRequest
): Promise<APIRes<{ data: string }>> => {
  const url = `/job_applies/${idJobApplies}/update_status`
  return axiosBasic.patch(url, body)
}

const cancelJob = (id: string) => {
  const url = `/jobs/${id}/closed_job`
  return axiosBasic.patch(url)
}

export const JobAPI = { updateJobApplies, cancelJob }
