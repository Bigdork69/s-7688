import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'; // You'll need to get this from WalletConnect

// 2. Create wagmiConfig
const metadata = {
  name: 'RugGenesis',
  description: 'Check your RUG token claim status',
  url: 'https://your-website.com', // Replace with your website
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const configureWeb3Modal = () => {
  const chains = [mainnet];
  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  createWeb3Modal({ wagmiConfig, projectId, chains });
};