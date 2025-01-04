import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet } from 'viem/chains';

// Get your projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

const metadata = {
  name: 'RugGenesis',
  description: 'Check your RUG token claim status',
  url: 'https://your-website.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet] as const;

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({ wagmiConfig, projectId, chains });

export const configureWeb3Modal = () => {
  // Configuration is now handled through the exported wagmiConfig
};