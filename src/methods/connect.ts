import { Account } from 'web3-core';

import { web3 } from '~/config';

export const connect = (privateKey: string): Account => {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts[0] = account;
  return account;
};
