import { web3 } from '~/config';

export const balanceOf = async () => {
  const res = await web3?.eth.getBalance('0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258');
  return res;
};
