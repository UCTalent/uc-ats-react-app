import { http, cookieStorage, createConfig, createStorage } from "wagmi"
import { base, baseSepolia, blastSepolia, Chain, sepolia } from "wagmi/chains"
import { coinbaseWallet } from "wagmi/connectors"

const supportedChains: [Chain, ...Chain[]] = [sepolia, baseSepolia, blastSepolia, base]

export function getConfig() {
  return createConfig({
    chains: supportedChains,
    connectors: [
      coinbaseWallet({
        appName: "UCTalent App",
        preference: "all",
        version: "4",
      }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {}),
  })
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
