import { JOB_APPLY_STATUS } from "constants/JOB"

export interface IUpdateJobApplyStatusRequest {
  job_apply: {
    status: JOB_APPLY_STATUS
    rejected_note?: string
  }
}

export interface IUpdateJobApplyStatusResponse {
  message: string
}
