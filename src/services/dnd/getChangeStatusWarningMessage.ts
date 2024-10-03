export const getChangeStatusWarningMessage = (name: string, status: string): string =>
  `<p style="text-align: center">Are you sure you want to move <span style="font-weight: 700">${name}</span> to ${status}?</p>`
