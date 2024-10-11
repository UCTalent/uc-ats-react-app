export enum JOB_TYPE {
  FULL_TIME = "full_time",
  PART_TIME = "part_time",
  CONTRACT = "contract",
  FREELANCER = "freelancer",
}

export const JOB_TYPE_NAME = {
  [JOB_TYPE.FULL_TIME]: "Full-time",
  [JOB_TYPE.PART_TIME]: "Part-time",
  [JOB_TYPE.CONTRACT]: "Contract",
  [JOB_TYPE.FREELANCER]: "Freelancer",
}

export const CANDIDATE_STATUS_MAPPING = {
  new: "new-application",
  email_sent: "new-application",
  under_review: "screening",
  interviewing: "interview",
  offering: "offer",
  hired: "hired",
  rejected: "failed",
}

export const dndSceneInitial = {
  "new-application": [],
  screening: [],
  interview: [],
  offer: [],
  hire: [],
  failed: [],
}
