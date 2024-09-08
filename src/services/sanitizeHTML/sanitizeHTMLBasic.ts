import xss from "xss"

const sanitizeHTMLBasic = (html: string): string => {
  const xssOptions = {
    whiteList: {
      a: ["href", "title", "target"],
      b: [],
      i: [],
      u: [],
      strong: [],
      em: [],
      p: [],
      br: [],
      ul: [],
      li: [],
      ol: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      img: ["src", "alt"],
    },
    stripIgnoreTag: true,
    stripIgnoreTagBody: true,
  }

  return xss(html, xssOptions)
}

export default sanitizeHTMLBasic
