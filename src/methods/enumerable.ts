import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export const totalSupply = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const totalSupply = (await contract.methods.totalSupply().call()) as string;
  return totalSupply;
};

export const tokenIds = async ({ address }: Pick<Token, 'address'>): Promise<string[]> => {
  const contract = getContract(address);

  const totalSupply = (await contract.methods.totalSupply().call()) as number;
  const range = Array.from({ length: totalSupply }, (_, i) => i);

  return Promise.all(range.map(async (i) => (await contract.methods.tokenByIndex(i).call()) as string));
};
