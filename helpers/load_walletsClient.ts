import * as envEnc from "@chainlink/env-enc";
envEnc.config();
import * as dotenv from "dotenv";
dotenv.config();

import { mnemonicToAccount, HDAccount } from "viem/accounts";
import { scrollSepolia, sepolia, mainnet, scroll } from "viem/chains";
import {
  http,
  createWalletClient,
  WalletClient,
  publicActions,
  PublicActions,
  PublicClient,
} from "viem";

export const accounts: HDAccount[] = [];

export const getAccounts = () => {
  for (let i = 0; i < 15; i++) {
    accounts[i] = mnemonicToAccount(process.env.SEED_1 || "", {
      addressIndex: i,
    });
  }
  for (let j = 0; j < 15; j++) {
    accounts[j + 15] = mnemonicToAccount(process.env.SEED_2 || "", {
      addressIndex: j,
    });
  }
};

interface WalletClientWithPublicActions extends WalletClient, PublicActions {}

export const L1Wallets: WalletClientWithPublicActions[] = [];

export const getL1Wallets = () => {
  for (let i = 0; i < 15; i++) {
    L1Wallets[i] = createWalletClient({
      account: accounts[i],
      chain: mainnet,
      transport: http(process.env.ETHEREUM_MAINNET_RPC_URL),
    }).extend(publicActions);
  }
};

export const L2Wallets: WalletClientWithPublicActions[] = [];

export const getL2Wallets = () => {
  for (let i = 0; i < 15; i++) {
    L2Wallets[i] = createWalletClient({
      account: accounts[i],
      chain: scroll,
      transport: http(process.env.SCROLL_MAINNET_RPC_URL),
    }).extend(publicActions);
  }
};

export const getWallets = () => {
  getAccounts();
  // getL1Wallets();
  // getL2Wallets();
};

const test = async () => {
  let index = 0;
  for (const account of accounts) {
    console.log(index, account.address);
    index++;
  }
  console.log(accounts.length);

  // const [address] = await L1Wallets[0].getAddresses();
  // console.log("L1Wallets[0] =>", address);
};

// export const getBalanceETH_L2 = async (L2Wallet: WalletClient) =>
//   Number(await L2Wallet.getBalance()).toString();

// export const getBalanceETH_L1 = async (L1Wallet: WalletClient) =>
//   Number(await L1Wallet.getBalance());
getWallets();
