import { Account } from 'web3-core';

import { web3 } from '~/config';

export const getAccount = (): Account => {
  return web3.eth.accounts[0];
};
