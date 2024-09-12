import { ApolloProvider as ApolloLibProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { type ReactNode } from "react"

interface ApolloProviderProps {
  children: ReactNode
}

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
})

const ApolloProvider = ({ children }: ApolloProviderProps) => {
  return <ApolloLibProvider client={client}>{children}</ApolloLibProvider>
}

export default ApolloProvider
