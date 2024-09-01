// types/theme.d.ts

import { PaletteColor } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface TypeBackground {
    active: string
  }

  interface TypeText {
    accent: string
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>
    text?: Partial<TypeText>
  }

  interface Palette {
    surface?: PaletteColor
    tertiary: string
    inverse: string
    lime: string
    limeHover: string
    scrollbar: {
      primary: string
    }
    icons: {
      primary: string
      secondary: string
      iconWww: string
    }
    border: {
      outlined: string
      divider: string
      otherOutlined: string
    }
  }

  interface PaletteOptions {
    surface?: PaletteColor
    tertiary?: string
    inverse?: string
    lime?: string
    limeHover?: string
    scrollbar?: {
      primary?: string
    }
    icons?: {
      primary?: string
      secondary?: string
      iconWww?: string
    }
    border?: {
      outlined?: string
      divider?: string
      otherOutlined?: string
    }
  }

  interface Theme {
    status: {
      danger: React.CSSProperties["color"]
    }
  }

  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties["color"]
    }
  }
}

export {}
