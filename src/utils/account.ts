import { web3 } from '~/config';
import { Account } from 'web3-core';

export const getAccount = (): Account => {
  return web3.eth.accounts[0];
};
