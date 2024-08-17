import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { RecoilRoot } from "recoil"
import { ApolloWrapper } from "libs/apolloProvider"
import Home from "pages/Home"
import NotFound from "pages/NotFound"

function App() {
  return (
    <ApolloWrapper>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </ApolloWrapper>
  )
}

export default App
