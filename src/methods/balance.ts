import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export interface BalanceOfParams extends Pick<Token, 'address'> {
  holderAddress: string;
}

export const balanceOf = async ({ address, holderAddress }: BalanceOfParams): Promise<string> => {
  const contract = getContract(address);

  const balance = (await contract.methods.balanceOf(holderAddress).call()) as string;
  return balance;
};
