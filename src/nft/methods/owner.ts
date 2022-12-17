import { AbiItem } from 'web3-utils';

import ERC721ABI from '~/abi/erc721.json';
import { web3 } from '~/config';

export interface OwnerOfParams {
  tokenId: string;
  collectionAddress: string;
}

export const ownerOf = async ({ collectionAddress, tokenId }: OwnerOfParams): Promise<string> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  const owner = (await contract.methods.ownerOf(tokenId).call()) as string;
  return owner;
};
