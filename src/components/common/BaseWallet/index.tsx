import React from "react"
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownFundLink,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet"
import { Address, Avatar, Name, Identity, EthBalance } from "@coinbase/onchainkit/identity"
import { Box } from "@mui/material"

const BaseWallet = () => {
  return (
    <Box
      sx={{
        "& .bg-ock-primary": {
          background: "secondary.main",
        },
        "& .flex > button": {
          padding: "8px 12px",
        },
      }}
    >
      <Wallet>
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
            Wallet
          </WalletDropdownLink>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </Box>
  )
}

export default BaseWallet