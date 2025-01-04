import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet } from 'viem/chains';

// Replace with your WalletConnect Project ID
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

const metadata = {
  name: 'RugGenesis',
  description: 'Check your RUG token claim status',
  url: 'https://your-website.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const configureWeb3Modal = () => {
  const wagmiConfig = defaultWagmiConfig({
    projectId,
    metadata,
    chains: [mainnet],
  });

  createWeb3Modal({ wagmiConfig, projectId });
};