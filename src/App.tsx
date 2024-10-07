import { LoadingSuspense } from "components/common/LoadingSuspense"
import ModalProvider from "providers/ModalProvider"
import PopConfirmProvider from "providers/PopConfirmProvider"
import { Suspense } from "react"
import { RelayEnvironmentProvider } from "react-relay"
import { RouterProvider } from "react-router-dom"
import environment from "./environment"
import useMutateGetProfileMe from "hooks/mutations/useMutateGetProfileMe"
import Router from "./routes"
import { useEffect } from "react"

const App = () => {
  const { mutate: mutateGetProfileMe, isFetched } = useMutateGetProfileMe()

  useEffect(() => {
    if (!isFetched) {
      mutateGetProfileMe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched])

  if (!isFetched) return null

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
