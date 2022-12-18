import { SBTContract } from '~/config';

export const ownerOf = async (tokenId: string): Promise<string> => {
  const owner = (await SBTContract.methods.ownerOf(tokenId).call()) as string;
  return owner;
};
