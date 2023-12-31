// export const GasLimit = {
//     DEPOSIT_ETH: 4e4,
//     DEPOSIT_ERC20: 8e4,
//     WITHDRAW_ETH: 16e4,
//     WITHDRAW_ERC20: 32e4,
//   };

export type Network = "mainnet" | "scroll";
type Token = "USDT" | "USDC" | "WETH";

export interface TokenDetails {
  symbol: string;
  address: string;
  decimals: number;
}

export type NetworkContracts = {
  [key in Token]: TokenDetails;
};

export const SCROLL_MAINNET_CONTRACT: NetworkContracts = {
  USDT: {
    symbol: "USDT",
    address: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
    decimals: 6,
  },
  USDC: {
    symbol: "USDC",
    address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
    decimals: 6,
  },
  WETH: {
    symbol: "WETH",
    address: "0x5300000000000000000000000000000000000004",
    decimals: 18,
  },
};

export const MAINNET_CONTRACT: NetworkContracts = {
  USDT: {
    symbol: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
  },
  USDC: {
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
  },
  WETH: {
    symbol: "WETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
  },
};
