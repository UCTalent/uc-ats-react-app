import { ADDRESS_TOKEN_SMART_CONTRACT, tokenABI } from "src/smart-contract/development/tokenABI"
import { useReadContracts } from "wagmi"

type TypeProps = {
  abi?: readonly unknown[]
  address?: `0x${string}`
}

export const useGetDecimalsToken = ({
  address = ADDRESS_TOKEN_SMART_CONTRACT,
  abi = tokenABI,
}: TypeProps): number => {
  const { data, error, isLoading } = useReadContracts({
    allowFailure: true,
    contracts: [
      {
        address,
        abi,
        functionName: "decimals",
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)
  if (error) return 18
  if (isLoading) return 0
  return Number(data?.[0]?.result)
}
