import axiosBasic from "services/axios/axiosBasic"
import axiosGateWay from "services/axios/axiosGateWay"
import { APIRes } from "types/api"
import {
  CloseJobRequest,
  CreateSmartContractSignatureRequest,
  CreateSmartContractSignatureResponse,
  JobAppliesRequest,
} from "types/api/job"

const updateJobApplies = (
  idJobApplies: string,
  body: JobAppliesRequest
): Promise<APIRes<{ data: string }>> => {
  const url = `/job_applies/${idJobApplies}/update_status`
  return axiosBasic.patch(url, body)
}

const cancelJob = (id: string, body: CloseJobRequest) => {
  const url = `/jobs/${id}/closed_job`
  return axiosBasic.patch(url, body)
}

const createSmartContractSignature = (
  request: CreateSmartContractSignatureRequest
): Promise<APIRes<CreateSmartContractSignatureResponse>> => {
  const url = "web3/smartcontracts/base-sepolia/ucreferral/signatures/close-job"
  return axiosGateWay.post(url, request)
}

export const JobAPI = { updateJobApplies, cancelJob, createSmartContractSignature }
