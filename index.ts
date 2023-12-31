import * as envEnc from "@chainlink/env-enc";
envEnc.config();
import * as dotenv from "dotenv";
dotenv.config();

import { scrollSepolia, sepolia, mainnet, scroll } from "viem/chains";

import {
  createL1PublicClient,
  createL2PublicClient,
} from "./helpers/load_publicClient";

import {
  accounts,
  L2Wallets,
  getWallets,
  getL2Wallets,
} from "./helpers/load_walletsClient";

import { walletBalance_L2_token } from "./modules/tokens_Balances_L2";

import { SCROLL_MAINNET_CONTRACT } from "./constants/constants";

export const L1PublicClient = createL1PublicClient(mainnet);
export const L2PublicClient = createL2PublicClient(scroll);

const main = async () => {
  // Acquire wallets

  getWallets();

  getL2Wallets();

  for (let i = 0; i < accounts.length; i++) {
    walletBalance_L2_token(accounts[i], {
      symbol: "USDT",
      address: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
      decimals: 8,
    });
  }
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
