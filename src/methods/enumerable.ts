import { SBTContract } from '~/config';

export const totalSupply = async (): Promise<string> => {
  const totalSupply = (await SBTContract.methods.totalSupply().call()) as string;
  return totalSupply;
};
