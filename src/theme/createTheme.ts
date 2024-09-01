import {
  createTheme as createMUITheme,
  responsiveFontSizes,
  PaletteOptions,
  Theme,
  BreakpointsOptions,
  Breakpoint,
} from "@mui/material/styles"
// import { font } from "./font"

export const createTheme = (mode = "light") => {
  const isLightMode = mode === "light"

  let theme: Theme = createMUITheme({
    palette: {
      mode,
      background: {
        default: isLightMode ? "#fff" : "#2A2D30",
        paper: isLightMode ? "#F8F7FF" : "#303438",
        surface: isLightMode ? "rgba(18, 22, 25, 0.02)" : "rgba(248, 247, 255, 0.06)",
        surface1: isLightMode ? "#fff" : "rgba(248, 247, 255, 0.06)",
        surfaceHover: isLightMode ? "rgba(105, 51, 255, 0.04)" : "rgba(248, 247, 255, 0.12)",
        modal: isLightMode ? "#fff" : "#303438",
        disabled: isLightMode ? "rgba(18, 22, 25, 0.02)" : "rgba(248, 247, 255, 0.04)",
        lineError: isLightMode ? "rgba(18, 22, 25, 0.12)" : "rgba(18, 22, 25, 0.12)",
        success: isLightMode ? "#14B8A6" : "#14B8A6",
        tertiary: isLightMode ? "rgba(248, 247, 255, 1)" : "rgba(248, 247, 255, 0.06)",
        inverse: isLightMode ? "#121619" : "#121619",
        shades: isLightMode ? "rgba(248, 247, 255, 0.12)" : "rgba(248, 247, 255, 0.12)",
        lime: isLightMode ? "#C9FF33" : "#C9FF33",
        limeHover: isLightMode ? "#B7E731" : "#B7E731",
        accent: isLightMode ? "#F8F7FF" : "#F8F7FF",
      },
      primary: {
        main: isLightMode ? "#6933FF" : "#6933FF",
        shades: isLightMode ? "rgba(18, 22, 25, 0.04)" : "rgba(248, 247, 255, 0.04)",
      },
      secondary: {
        main: isLightMode ? "#121619" : "#F8F7FF",
      },
      text: {
        primary: isLightMode ? "#121619" : "#DFDEE6",
        secondary: isLightMode ? "#717375" : "#AEADB3",
        accent: isLightMode ? "#6933FF" : "#9670FF",
        accent1: isLightMode ? "rgba(150, 112, 255, 1)" : "rgba(150, 112, 255, 1)",
        active: isLightMode ? "rgba(18, 22, 25, 0.54)" : "rgba(248, 247, 255, 0.54)",
        light: isLightMode ? "#F8F7FF" : "#DFDEE6",
        button: isLightMode ? "#F8F7FF" : "#F8F7FF",
        disabled: isLightMode ? "rgba(18, 22, 25, 0.3)" : "rgba(248, 247, 255, 0.3)",
        tertiary: isLightMode ? "#A0A2A3" : "#7C7C80",
        contrast: isLightMode ? "#F8F7FF" : "#121619",
        dark: isLightMode ? "#000" : "#000",
      },
      shadow: {
        menu: isLightMode
          ? "0px 2px 10px -1px rgba(105, 51, 255, 0.02), 0px 6px 32px rgba(105, 51, 255, 0.04), 0px 1px 12px rgba(105, 51, 255, 0.06)"
          : "0px 2px 4px -1px rgba(18, 22, 25, 0.02), 0px 4px 8px rgba(18, 22, 25, 0.06), 0px 1px 16px rgba(18, 22, 25, 0.16)",
        elevation: isLightMode
          ? "0px 2px 4px -1px rgba(18, 22, 25, 0.2), 0px 4px 5px rgba(18, 22, 25, 0.14), 0px 1px 10px rgba(18, 22, 25, 0.12)"
          : "0px 2px 4px -1px rgba(18, 22, 25, 0.2), 0px 4px 5px rgba(18, 22, 25, 0.14), 0px 1px 10px rgba(18, 22, 25, 0.12)",
      },
      divider: isLightMode ? "rgba(18, 22, 25, 0.3)" : "#636366",
      tag: isLightMode ? "rgba(18, 22, 25, 0.04)" : "rgba(248, 247, 255, 0.04)",
      select: {
        surface: isLightMode ? "#fff" : "rgba(248, 247, 255, 0.06)",
        menu: isLightMode ? "#fff" : "#3C4044",
        otherSelected: isLightMode ? "rgba(105, 51, 255, 0.04)" : "rgba(248, 247, 255, 0.04)",
      },
      scrollbar: {
        primary: isLightMode ? "rgba(18, 22, 25, 0.3)" : "rgba(248, 247, 255, 0.3)",
      },
      icons: {
        primary: isLightMode ? "rgba(18, 22, 25, 0.54)" : "rgba(248, 247, 255, 0.54)",
        secondary: isLightMode ? "#121619" : "#F8F7FF",
        iconWww: isLightMode ? "#F8F7FF" : "#121619",
      },
      border: {
        outlined: isLightMode ? "rgba(18, 22, 25, 0.12)" : "rgba(248, 247, 255, 0.12)",
        divider: isLightMode ? "rgba(18, 22, 25, 0.08)" : "rgba(248, 247, 255, 0.12)",
        otherOutlined: isLightMode ? "rgba(18, 22, 25, 0.04)" : "rgba(248, 247, 255, 0.04)",
      },
      error: {
        main: isLightMode ? "#E11900" : "#F43A23",
      },
      warning: {
        main: isLightMode ? "#ffa726" : "#f57c00",
      },
      info: {
        main: isLightMode ? "#29b6f6" : "#0288d1",
      },
      success: {
        main: isLightMode ? "#14B8A6" : "#14B8A6",
      },
      white: isLightMode ? "#F8F7FF" : "#F8F7FF",
    } as PaletteOptions,
    // typography: {
    //   fontFamily: font.style.fontFamily,
    // },
    breakpoints: {
      values: {
        xs: 0,
        xxs: 414,
        sm: 568,
        md: 992,
        lg: 1280,
        xl: 1440,
        xxl: 1920,
      },
    } as BreakpointsOptions,
  })

  theme = createMUITheme(theme, {
    components: {
      MuiTypography: {
        defaultProps: {},
        styleOverrides: {
          subtitle1: {
            fontSize: "18px",
            fontWeight: 600,
            color: theme.palette.text.primary,
            lineHeight: 1.75,
            letterSpacing: "0.15px",
          },
          subtitle2: {
            fontSize: "18px",
            fontWeight: 400,
            color: theme.palette.text.primary,
            lineHeight: 1.75,
            letterSpacing: "0.15px",
          },
          body1: {
            fontSize: "16px",
            fontWeight: 400,
            color: theme.palette.text.primary,
            lineHeight: 1.6,
            letterSpacing: "0.15px",
          },
          body2: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.5,
            color: theme.palette.text.secondary,
            letterSpacing: "0.13px",
          },
          h3: {
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: 1.5,
            color: theme.palette.text.primary,
            [theme.breakpoints.down("sm")]: {
              fontSize: "34px",
            },
          },
          h4: {
            fontSize: "34px",
            fontWeight: 600,
            lineHeight: 1.25,
            color: theme.palette.text.primary,
            letterSpacing: "0.25px",
            [theme.breakpoints.down("sm")]: {
              fontSize: 24,
            },
          },
          h5: {
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.35,
            color: theme.palette.text.primary,
            letterSpacing: "0.25px",
          },
          h6: {
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1.6,
            letterSpacing: "0.15px",
            color: theme.palette.text.primary,
            [theme.breakpoints.down("xxs" as Breakpoint)]: {
              fontSize: 18,
              lineHeight: 1.75,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "8px !important",
          },
          input: {
            lineHeight: "24px",
            size: "16px",
            fontWeight: 400,
            letterSpacing: "0.15px",
            color: isLightMode ? "#121619" : "#DFDEE6",
            padding: "16px 12px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: isLightMode ? "rgba(18, 22, 25, 0.12)" : "rgba(248, 247, 255, 0.12)",
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            gap: "8px",
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          colorPrimary: {
            color: isLightMode ? "rgba(18, 22, 25, 0.54)" : "rgba(248, 247, 255, 0.54)",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            right: "12px",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: isLightMode ? "rgba(18, 22, 25, 0.08)" : "rgba(248, 247, 255, 0.12)",
          },
        },
      },
    },
  })

  return responsiveFontSizes(theme)
}

export default createTheme
