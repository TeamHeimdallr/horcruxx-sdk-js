import Web3 from 'web3';

const BNB_CHAIN_TESTNET = 'https://data-seed-prebsc-1-s1.binance.org:8545';
export const HORCRUXX_BURNER_ADDRESS = '0x000000000000000000000000000000000000dead';
export const web3 = new Web3(Web3.givenProvider || BNB_CHAIN_TESTNET);
