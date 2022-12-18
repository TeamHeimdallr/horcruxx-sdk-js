import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export interface GetNameParams {
  collectionAddress: string;
}
export type Name = string;
export const getName = async ({ collectionAddress }: GetNameParams): Promise<Name> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const name = (await contract.methods.name().call()) as Name;
  return name;
};

export interface GetSymbolParams {
  collectionAddress: string;
}
export type TokenSymbol = string;
export const getSymbol = async ({ collectionAddress }: GetSymbolParams): Promise<TokenSymbol> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const symbol = (await contract.methods.symbol().call()) as TokenSymbol;
  return symbol;
};

export interface GetTokenUriParams {
  collectionAddress: string;
  tokenId: string;
}
export type TokenUri = string;
export const getTokenUri = async ({ tokenId, collectionAddress }: GetTokenUriParams): Promise<TokenUri> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const tokenUri = (await contract.methods.tokenUri(tokenId).call()) as TokenUri;
  return tokenUri;
};
