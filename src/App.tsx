import { Suspense, useEffect, useState } from "react"
import LoadingSuspense from "components/common/LoadingSuspense"
import ModalProvider from "providers/ModalProvider"
import PopConfirmProvider from "providers/PopConfirmProvider"
import { RelayEnvironmentProvider } from "react-relay"
import { RouterProvider } from "react-router-dom"
import useMutateGetProfileMe from "hooks/mutations/useMutateGetProfileMe"
import environment from "./environment"
import Router from "./routes"
import { getConfig } from "libs/wagmiConfig"
import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { OnchainKitProvider } from "@coinbase/onchainkit"
import { base } from "wagmi/chains"
import { ENV_ONCHAINKIT_API_KEY } from "constants/ENV_CONFIG"
import { Alert } from "components/common/Alert"

const App = () => {
  const { mutate: mutateGetProfileMe, isFetched } = useMutateGetProfileMe()
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  useEffect(() => {
    if (!isFetched) {
      mutateGetProfileMe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched])

  if (!isFetched) return null
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={ENV_ONCHAINKIT_API_KEY} chain={base}>
          <RelayEnvironmentProvider environment={environment}>
            <Suspense fallback={<LoadingSuspense />}>
              <RouterProvider router={Router} />
              <ModalProvider />
              <PopConfirmProvider />
              <Alert />
            </Suspense>
          </RelayEnvironmentProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
