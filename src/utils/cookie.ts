export const setCookie = (cname: string, cValue: string, exSeconds: number): void => {
  if (typeof window === "undefined") return
  const d = new Date()
  d.setTime(d.getTime() + exSeconds * 1000)
  const expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cValue + ";" + expires + ";path=/"
}

export const getCookie = (cname: string): string => {
  if (typeof window === "undefined") return
  const name = cname + "="
  const ca = document.cookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export const deleteCookie = (cname: string): void => {
  document.cookie = cname + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
