import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { RecoilRoot } from "recoil"
import { ApolloWrapper } from "libs/apolloProvider"
import TheHomePage from "pages/Home"
import NotFound from "pages/NotFound"

const App = () => {
  return (
    <ApolloWrapper>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<TheHomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </ApolloWrapper>
  )
}

export default App
