import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet } from 'viem/chains'

// Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID'

const metadata = {
  name: 'RUG Claim Checker',
  description: 'Check your RUG token claim status',
  url: 'https://your-website.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  chains: [mainnet],
  projectId,
  metadata,
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains: [mainnet]
})