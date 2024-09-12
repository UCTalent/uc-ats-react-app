import { Routes, Route } from "react-router-dom"
import ApolloProvider from "providers/ApolloProvider"
import ModalProvider from "providers/ModalProvider"
import RouteElement from "routes/RouteElement"
import ROUTES from "./routes"

const App = () => {
  return (
    <ApolloProvider>
      <Routes>
        {ROUTES.MEMBER.map((route) => (
          <Route key={route.path} path={route.path} element={<RouteElement route={route} />} />
        ))}
      </Routes>
      <ModalProvider />
    </ApolloProvider>
  )
}

export default App
