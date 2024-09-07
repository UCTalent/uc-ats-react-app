import clsx from "clsx"
type Styles = {
  [className: string]: string
}

export const bindClass = (
  styles: Styles
): ((...args: Array<string | Record<string, boolean>>) => string) => {
  return (...args: Array<string | Record<string, boolean>>): string => {
    return clsx(
      ...args.map((arg) => {
        if (typeof arg === "string") {
          return styles[arg] || arg
        } else if (typeof arg === "object") {
          return Object.keys(arg)
            .filter((key) => arg[key])
            .map((key) => styles[key] || key)
            .join(" ")
        }
        return ""
      })
    )
  }
}
