import { Route, Routes } from "react-router-dom"
import { ApolloWrapper } from "libs/apolloProvider"
import { ModalProvider } from "components/providers"
import TheHomePage from "pages/Home"
import NotFound from "pages/NotFound"
import "./App.css"

const App = () => {
  return (
    <ApolloWrapper>
      <Routes>
        <Route path="/" element={<TheHomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ModalProvider />
    </ApolloWrapper>
  )
}

export default App
