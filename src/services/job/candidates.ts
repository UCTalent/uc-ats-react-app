export const getSalaryText = (salaryText: string): string => {
  const youWillLoveIt = "you_will_love_it"
  if (salaryText.includes(youWillLoveIt)) return "You will love it"
  return salaryText
}
