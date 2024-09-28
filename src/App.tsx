import { RouterProvider } from "react-router-dom"
import ApolloProvider from "providers/ApolloProvider"
import ModalProvider from "providers/ModalProvider"
import PopConfirmProvider from "providers/PopConfirmProvider"
import Router from "./routes"

const App = () => {
  return (
    <ApolloProvider>
      <RouterProvider router={Router} />
      <ModalProvider />
      <PopConfirmProvider />
    </ApolloProvider>
  )
}

export default App
