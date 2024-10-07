import { ENV_GRAPHQL_ENDPOINT } from "constants/ENV_CONFIG"
import { Environment, Network, RecordSource, Store } from "relay-runtime"
import { RequestParameters } from "relay-runtime/lib/util/RelayConcreteNode"
import { Variables } from "relay-runtime/lib/util/RelayRuntimeTypes"

async function FetchGraphQL(params: RequestParameters, variables: Variables) {
  const response = await fetch(ENV_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  return await response.json()
}

const environment = new Environment({
  network: Network.create(FetchGraphQL),
  store: new Store(new RecordSource()),
})

export default environment
