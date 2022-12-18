import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export const totalSupply = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const totalSupply = (await contract.methods.totalSupply().call()) as string;
  return totalSupply;
};
