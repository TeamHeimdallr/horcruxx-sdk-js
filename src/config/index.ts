import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';

const BNB_CHAIN_TESTNET = 'https://data-seed-prebsc-1-s1.binance.org:8545';
export const HORCRUXX_SOULBOUND_TOKEN_TESTNET = '0xa4e1EE041415eE102DaF131663B552E5779C1b98';

export const web3 = new Web3(Web3.givenProvider || BNB_CHAIN_TESTNET);
export const SBTContract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], HORCRUXX_SOULBOUND_TOKEN_TESTNET);
