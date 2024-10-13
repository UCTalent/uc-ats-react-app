import { capitalizeFirstLetter } from "utils/index"

export const getChangeStatusWarningMessage = (name: string, status: string): string => {
  return `<p style="text-align: center">Are you sure you want to move <span style="font-weight: 700">${name}</span> to <span style="font-weight: 700">${capitalizeFirstLetter(status)}</span>?</p>`
}
