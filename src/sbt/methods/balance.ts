import { web3 } from '~/config';

export interface BalanceOfParams {
  address: string;
}
export type Balance = string;

export const balanceOf = async ({ address }: BalanceOfParams): Promise<Balance> => {
  const res = (await web3.eth.getBalance(address)) as Balance;
  return res;
};
