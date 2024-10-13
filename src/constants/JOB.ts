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

export const EXPERIENCE_LEVELS_NAME = {
  0: "0-1 years",
  1: "1-2 years",
  2: "2-4 years",
  4: "4-6 years",
  6: "6-10 years",
  10: "10-15 years",
  15: "15+ years",
}

export const MANAGEMENT_LEVELS_NAME = {
  0: "None",
  1: "1-5",
  6: "6-10",
  11: "11-20",
  21: "21-40",
  41: "41+",
}

export enum JOB_APPLY_STATUS {
  EMAIL_APPLICATION = "new-application",
  SCREENING = "screening",
  INTERVIEWING = "interview",
  OFFERING = "offer",
  HIRED = "hired",
  REJECTED = "failed",
}

export const JOB_APPLY_STATUS_MAPPING = {
  [JOB_APPLY_STATUS.EMAIL_APPLICATION]: "new",
  [JOB_APPLY_STATUS.SCREENING]: "under_review",
  [JOB_APPLY_STATUS.INTERVIEWING]: "interviewing",
  [JOB_APPLY_STATUS.OFFERING]: "offering",
  [JOB_APPLY_STATUS.HIRED]: "hired",
  [JOB_APPLY_STATUS.REJECTED]: "rejected",
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
  hired: [],
  failed: [],
}
