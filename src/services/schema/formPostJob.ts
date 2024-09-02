import * as yup from "yup"
import { messageRules } from "utils/messageRules"

export const schemaPostJobForm = yup.object().shape({
  jobTitle: yup.string().required(messageRules.required("Job Title")),
  companyName: yup.string().required(messageRules.required("Company Name")),
  location: yup.string().required(messageRules.required("Location")),
  remote: yup.boolean().required(messageRules.required("Remote")),
  headcount: yup.string().required(messageRules.required("Headcount")),
  contractDetail: yup.string().required(messageRules.required("Contract Detail")),
  minimumSalary: yup
    .number()
    .required(messageRules.required("Minimum Salary"))
    .positive("Minimum Salary must be greater than 0"),
  maximumSalary: yup
    .number()
    .required(messageRules.required("Maximum Salary"))
    .positive("Maximum Salary must be greater than 0")
    .moreThan(yup.ref("minimumSalary"), "Maximum Salary must be greater than Minimum Salary"),
  currency: yup.string().required(messageRules.required("Currency")),
  frequency: yup.string().required(messageRules.required("Frequency")),
  jobDescription: yup.string().required(messageRules.required("Job Description")),
})
