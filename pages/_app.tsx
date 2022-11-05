import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Sirens NFT Treasure Trove</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="In Game items, collectables and upgrades, List Your NFTs For Sale, Accept Bids, and Buy NFTs"
        />
        <meta
          name="keywords"
          content="Sirens, Mermaid, Marketplace, NFT Marketplace, NFT Auction, Treasure, Trove, Dex, Dapp"
        />
      </Head>
      <Header />
      <Component {...pageProps} />

      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
