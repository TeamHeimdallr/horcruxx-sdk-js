import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export const balanceOf = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const balance = (await contract.methods.balanceOf(address).call()) as string;
  return balance;
};
