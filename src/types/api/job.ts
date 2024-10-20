export type StatusJobApply =
  | "new"
  | "email_sent"
  | "under_review"
  | "interviewing"
  | "offering"
  | "hired"
  | "rejected"

export type JobAppliesRequest = {
  job_apply: {
    status: StatusJobApply
    rejected_note?: string
  }
}

export type CreateSmartContractSignatureRequest = {
  sender: string
  jobId: string
  talentAddress: string
  referrerAddress: string
  referralPercentage: number
  referraTimestamp: number
  applyTimestamp: number
}

export type CreateSmartContractSignatureResponse = {
  body: {
    signature: string
  }
}

export type CloseJobRequest = {
  job: {
    close_type: "fail" | "success"
    job_closure_reasons_attributes?: {
      choice_options?: Array<string>
      other_reason?: string
    }
  }
}