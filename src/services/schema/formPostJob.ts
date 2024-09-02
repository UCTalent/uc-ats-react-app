import * as yup from "yup"
import { messageRules } from "utils/messageRules"

export const schemaPostJobForm = yup.object().shape({
  jobTitle: yup.string().required(messageRules.required("Job Title")),
  companyName: yup.string().required(messageRules.required("Company Name")),
  location: yup.string().required(messageRules.required("Location")),
  remote: yup.boolean().required(messageRules.required("Remote")),
  headcount: yup.string().required(messageRules.required("Headcount")),
  contractDetail: yup.string().required(messageRules.required("Contract Detail")),
  minimumSalary: yup.string().required(messageRules.required("Minimum Salary")),
  maximumSalary: yup.string().required(messageRules.required("Maximum Salary")),
  currency: yup.string().required(messageRules.required("Currency")),
  frequency: yup.string().required(messageRules.required("Frequency")),
  jobDescription: yup.string().required(messageRules.required("Job Description")),
})
