import * as yup from "yup"
import { messageRules } from "utils/messageRules"

export const schemaLoginForm = yup.object().shape({
  email: yup.string().email(messageRules.email()).required(messageRules.required("Email")),
  password: yup.string().required(messageRules.required("Password")),
})
