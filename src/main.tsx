import "@coinbase/onchainkit/styles.css"
import { createRoot } from "react-dom/client"
import { RecoilRoot } from "recoil"
import { CssBaseline } from "@mui/material"
import ThemeProvider from "theme/ThemeProvider"
import App from "./App"
import "assets/css/app.css"

createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <ThemeProvider>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </RecoilRoot>
  </>
)
