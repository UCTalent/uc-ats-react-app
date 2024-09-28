import { RouterProvider } from "react-router-dom"
import ApolloProvider from "providers/ApolloProvider"
import ModalProvider from "providers/ModalProvider"
import Router from "./routes"

const App = () => {
  return (
    <ApolloProvider>
      <RouterProvider router={Router} />
      <ModalProvider />
    </ApolloProvider>
  )
}

export default App
