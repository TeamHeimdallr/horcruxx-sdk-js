import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export interface NameParams {
  collectionAddress: string;
}
export type Name = string;
export const name = async ({ collectionAddress }: NameParams): Promise<Name> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const name = (await contract.methods.name().call()) as Name;
  return name;
};

export interface SymbolParams {
  collectionAddress: string;
}
export type TokenSymbol = string;
export const symbol = async ({ collectionAddress }: SymbolParams): Promise<TokenSymbol> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const symbol = (await contract.methods.symbol().call()) as TokenSymbol;
  return symbol;
};

export interface TokenUriParams {
  collectionAddress: string;
  tokenId: string;
}
export type TokenUri = string;
export const tokenUri = async ({ tokenId, collectionAddress }: TokenUriParams): Promise<TokenUri> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const tokenUri = (await contract.methods.tokenUri(tokenId).call()) as TokenUri;
  return tokenUri;
};
