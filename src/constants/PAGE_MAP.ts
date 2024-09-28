export const PAGE_MAP = {
  HOME: "/",
  JOB_CANDIDATE: (id: string) => `/jobs/${id}/candidates`,
  JOB_CANDIDATE_SUMMARY: (jobId: string, candidateId: string) =>
    `/jobs/${jobId}/candidates/${candidateId}/summary`,
  JOB_CANDIDATE_RESUME: (jobId: string, candidateId: string) =>
    `/jobs/${jobId}/candidates/${candidateId}/resume`,
  JOB_CANDIDATE_NOTES: (jobId: string, candidateId: string) =>
    `/jobs/${jobId}/candidates/${candidateId}/notes`,
  JOB_CANDIDATE_JOBS: (jobId: string, candidateId: string) =>
    `/jobs/${jobId}/candidates/${candidateId}/jobs`,
  JOB_DETAIL: (id: string) => `/jobs/${id}/info`,
  JOB_NOTE: (id: string) => `/jobs/${id}/notes`,
}
