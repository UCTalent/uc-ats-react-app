import { useAccount, useConnect } from "wagmi"
import { injected } from "wagmi/connectors"

type Props = {
  onSuccess: (address?: `0x${string}`) => void
}

const useGetAddressAccount = (hasWeb3Meta: boolean) => {
  const { isConnected, address } = useAccount()
  const { connect } = useConnect()

  const getAddress = ({ onSuccess: handleSuccess }: Props) => {
    if (!hasWeb3Meta) {
      handleSuccess()
      return
    }
    if (!isConnected) {
      connect(
        { connector: injected() },
        {
          onSuccess: (data) => {
            handleSuccess(data.accounts[0])
          },
          onError: () => {
            handleSuccess()
          },
        }
      )
    } else {
      handleSuccess(address)
    }
  }

  return { getAddress }
}

export default useGetAddressAccount
