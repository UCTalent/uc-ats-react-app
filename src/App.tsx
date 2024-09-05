import { Routes, Route } from "react-router-dom"
import { ApolloWrapper } from "libs/apolloProvider"
import { ModalProvider } from "components/providers"
import { ROUTES } from "./routes"
import RouteElement from "routes/RouteElement"

const App = () => {
  return (
    <ApolloWrapper>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={<RouteElement route={route} />} />
        ))}
      </Routes>
      <ModalProvider />
    </ApolloWrapper>
  )
}

export default App
