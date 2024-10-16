import '@/styles/globals.css'

import { tokenFaucetConfig } from '@/services/utils';
import { AlephiumWalletProvider } from '@alephium/web3-react';
import React from 'react';

export const metadata = {
  title: "Alephium dApp Template",
  description: "A template for building dApps on Alephium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AlephiumWalletProvider theme="web95" network={tokenFaucetConfig.network} addressGroup={tokenFaucetConfig.groupIndex}>
          {children}
        </AlephiumWalletProvider>
      </body>
    </html>
  );
}
