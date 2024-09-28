export const PAGE_MAP = {
  HOME: "/",
  JOB_CANDIDATE: (id: string) => `/jobs/${id}/candidates`,
  JOB_CANDIDATE_INFO: (jobId: string, candidateId: string) =>
    `/jobs/${jobId}/candidates/${candidateId}`,
  JOB_DETAIL: (id: string) => `/jobs/${id}/info`,
  JOB_NOTE: (id: string) => `/jobs/${id}/notes`,
}
