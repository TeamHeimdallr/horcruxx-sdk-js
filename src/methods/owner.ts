import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export interface OwnerOfParams {
  tokenId: string;
  collectionAddress: string;
}

export type Owner = string;

export const ownerOf = async ({ collectionAddress, tokenId }: OwnerOfParams): Promise<Owner> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const owner = (await contract.methods.ownerOf(tokenId).call()) as Owner;
  return owner;
};
