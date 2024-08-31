import { createRoot } from "react-dom/client"
import { CssBaseline } from "@mui/material"
import ThemeProvider from "./theme/ThemeProvider"
import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>
)
