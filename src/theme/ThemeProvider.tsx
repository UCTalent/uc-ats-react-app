import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { createContext, useContext, useState } from "react"
// import useLocalStorage from "src/hooks/useLocalStorage"
import createTheme from "./createTheme"
// import { useEffect } from "react"

// Define the context type
interface IThemeContext {
  mode: string
  setMode: (mode: string) => void
}

// Create Theme context with a default value
export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

const ThemeProvider = ({ children }) => {
  // const [modeTheme] = useLocalStorage("modeTheme")

  const [mode, setMode] = useState("light")

  // useEffect(() => {
  //   if (modeTheme) setMode(modeTheme)
  // }, [modeTheme])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={createTheme(mode)}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("ThemeProvider is not provided")
  return context
}

export default ThemeProvider
