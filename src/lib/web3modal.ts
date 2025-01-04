import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'

// 2. Create wagmiConfig
const metadata = {
  name: 'RUG Claim Checker',
  description: 'Check your RUG token claim status',
  url: 'https://your-website.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  projectId,
  metadata,
  chains: [mainnet],
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true
})