export const openLinkInNewTab = (url: string): void => {
  if (!url || typeof url !== "string") return
  window.open(url, "_blank")
}
