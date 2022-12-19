import { web3, BNB_CHAIN_TESTNET } from '~/config';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const connect = (privateKey?: string) => {
  web3.setProvider(Web3.givenProvider || BNB_CHAIN_TESTNET);

  if (typeof window == 'undefined') {
    console.log('connect with private key');
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts[0] = account;
  } else if (typeof window.ethereum !== 'undefined') {
    console.log('connect with window.ethereum');
    web3.setProvider(window.ethereum);
  } else if (typeof window.web3 !== 'undefined') {
    console.log('connect with window.web3');
    web3.setProvider(window.web3.currentProvider);
  }

  console.log(web3.eth.accounts[0]);
};
