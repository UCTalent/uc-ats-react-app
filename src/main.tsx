import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import { RecoilRoot } from "recoil"
import { CssBaseline } from "@mui/material"
import ThemeProvider from "./theme/ThemeProvider"
import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  </>
)
