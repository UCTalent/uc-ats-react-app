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
