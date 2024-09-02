import type { TypePostJobForm } from "types/forms"

export const POST_JOB_DEFAULT_VALUE: TypePostJobForm = {
  jobTitle: "",
  companyName: "",
  location: "",
  remote: false,
  headcount: "",
  contractDetail: "",
  minimumSalary: 0,
  maximumSalary: 0,
  currency: "",
  frequency: "",
  jobDescription: "",
}
