import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export interface TotalSupplyParams {
  collectionAddress: string;
}
export type TotalSupply = string;
export const totalSupply = async ({ collectionAddress }: TotalSupplyParams): Promise<TotalSupply> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const totalSupply = (await contract.methods.totalSupply().call()) as TotalSupply;
  return totalSupply;
};

export interface TokenOfOwnerByIndexParams {
  owner: string;
  collectionAddress: string;
  index: string;
}
export type TokenOfOwnerByIndex = string;
export const tokenOfOwnerByIndex = async ({
  owner,
  collectionAddress,
  index,
}: TokenOfOwnerByIndexParams): Promise<TokenOfOwnerByIndex> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const tokenId = (await contract.methods.tokenOfOwnerByIndex(owner, index).call()) as TokenOfOwnerByIndex;
  return tokenId;
};

export interface TokenByIndexParams {
  collectionAddress: string;
  index: string;
}
export type TokenByIndex = string;
export const tokenByIndex = async ({ index, collectionAddress }: TokenByIndexParams): Promise<TokenByIndex> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const tokenId = await contract.methods.tokenUri(index).call();
  return tokenId;
};
