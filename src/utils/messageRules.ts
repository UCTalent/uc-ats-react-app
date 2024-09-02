export const messageRules = {
  required: (name: string) => `${name} is a required field`,
  email: () => "Email is not a valid email address",
  validateTime: "End Time must be higher Start Time",
  max: (name: string, max: number) => `Please enter ${name} is not over ${max} characters `,
}
