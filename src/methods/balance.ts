import { SBTContract } from '~/config';

export const balanceOf = async (address: string): Promise<string> => {
  const balance = (await SBTContract.methods.balanceOf(address).call()) as string;
  return balance;
};
