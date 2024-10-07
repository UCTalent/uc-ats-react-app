import { LoadingSuspense } from "components/common/LoadingSuspense"
import ModalProvider from "providers/ModalProvider"
import PopConfirmProvider from "providers/PopConfirmProvider"
import { Suspense } from "react"
import { RelayEnvironmentProvider } from "react-relay"
import { RouterProvider } from "react-router-dom"
import environment from "./environment"
import Router from "./routes"

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<LoadingSuspense />}>
        <RouterProvider router={Router} />
        <ModalProvider />
        <PopConfirmProvider />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App
