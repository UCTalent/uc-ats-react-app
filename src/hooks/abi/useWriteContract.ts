/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADDRESS_CORE_SMART_CONTRACT, coreABI } from "src/smart-contract/development/coreABI"
import {
  useAccount,
  useConnect,
  useWriteContract as useWriteContractWagmi,
  useSwitchChain,
} from "wagmi"
import { injected } from "wagmi/connectors"
import { baseSepolia } from "wagmi/chains"

type TypeProps = {
  abi?: readonly unknown[]
  address?: `0x${string}`
}

export const useWriteContract = ({
  abi = coreABI,
  address = ADDRESS_CORE_SMART_CONTRACT,
}: TypeProps) => {
  const { isConnected } = useAccount()
  const { connect } = useConnect()
  const { switchChain } = useSwitchChain()

  const { writeContract, ...option } = useWriteContractWagmi()

  const handleWriteSmartContract = async (
    {
      functionName,
      args,
    }: {
      functionName: string
      args: Array<any>
    },
    mutateOptions?: {
      onSuccess?: (value: any) => Promise<unknown> | unknown
      onError?: (value: any) => Promise<unknown> | unknown
      onSettled?: (value: any) => Promise<unknown> | unknown
    }
  ) => {
    const write = () =>
      switchChain(
        { chainId: baseSepolia.id },
        {
          onSuccess: () => {
            writeContract(
              {
                abi,
                address,
                functionName,
                args,
              } as any,
              {
                ...mutateOptions,
              }
            )
          },
          onError: () => {},
        }
      )

    if (!isConnected) {
      connect(
        { connector: injected() },
        {
          onSuccess: () => {
            write()
          },
        }
      )
    } else {
      write()
    }
  }

  return {
    ...option,
    write: handleWriteSmartContract,
  }
}
