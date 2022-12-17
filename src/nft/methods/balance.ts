import { web3 } from '~/config';

interface BalanceOfParams {
  address: string;
}
export const balanceOf = async ({ address }: BalanceOfParams): Promise<string> => {
  const res = await web3.eth.getBalance(address);
  return res;
};
