import { Account } from 'web3-core';
import { web3 } from '~/config';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const connect = (privateKey: string): Account => {
  let web3Instance: Web3;

  if (typeof window == 'undefined') {
    console.log('connect with private key');
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts[0] = account;
    return account;
  } else if (typeof window.ethereum !== 'undefined') {
    console.log('connect with window.ethereum');
    web3Instance = new Web3(window.ethereum);
  } else if (typeof window.web3 !== 'undefined') {
    console.log('connect with window.web3');
    web3Instance = new Web3(window.web3.currentProvider);
  }

  if (web3Instance) {
    return web3Instance.eth.requestAccounts()[0];
  }
};
