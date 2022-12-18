import { HORCRUXX_BURNER_ADDRESS } from '~/config';
import { Token } from '~/types';
import { ipfs } from '~/utils/fetch-ipfs';

import { totalSupply } from './enumerable';
import { name, originalNFTAddress, owner, ownerOf, symbol, tokenUri } from './metadata';

export interface Metadata {
  address: string; // sbt address
  tokenId: string;
  originalAddress: string; // original nft address
  ownerOf: string; // owner address
  name: string;
  symbol: string;
  tokenUri: string; // token ifps uri
  metadata: string; // json string
}
/**
 *
 * @param address sbt token address
 * @param tokenId token id
 */
export const getMetadata = async ({ address, tokenId }: Token): Promise<Metadata> => {
  const [_name, _ownerOf, _originalNFTAddress, _symbol, _tokenUri] = await Promise.all([
    name({ address }),
    ownerOf({ address, tokenId }),
    originalNFTAddress({ address }),
    symbol({ address }),
    tokenUri({ address, tokenId }),
  ]);
  const metadataUri = _tokenUri.split('://')[1] as string;
  const { data: ipfsData } = await ipfs.get<string>(`/${metadataUri}`);

  return {
    address,
    originalAddress: _originalNFTAddress,
    tokenId,
    ownerOf: _ownerOf,
    name: _name,
    symbol: _symbol,
    tokenUri: _tokenUri,
    metadata: JSON.stringify(ipfsData),
  };
};

export interface CollectionMetadata {
  address: string; // sbt address
  originalAddress: string; // original nft address
  name: string;
  symbol: string;
  owner: string;
  totalSupply: string;
}
export const getCollectionMetadata = async ({ address }: Pick<Token, 'address'>): Promise<CollectionMetadata> => {
  const [_name, _symbol, _owner, _totalSupply, _originalNFTAddress] = await Promise.all([
    name({ address }),
    symbol({ address }),
    owner({ address }),
    totalSupply({ address }),
    originalNFTAddress({ address }),
  ]);
  return {
    address,
    originalAddress: _originalNFTAddress,
    name: _name,
    symbol: _symbol,
    owner: _owner,
    totalSupply: _totalSupply,
  };
};

export interface TokenAttributes {
  address: string;
  tokenId: string;
  attributes: { [key: string]: unknown }[];
}
export const getTokenAttributes = async ({ address, tokenId }: Token): Promise<TokenAttributes> => {
  const _tokenUri = await tokenUri({ address, tokenId });
  const metadataUri = _tokenUri.split('://')[1] as string;

  const { data: ipfsData } = await ipfs.get<string>(`/${metadataUri}`);

  return {
    address,
    tokenId,
    attributes: JSON.parse(ipfsData),
  };
};

export interface CollectStatsParams {
  collectionAddress: string;
}

export interface CollectStats {
  tokenAddress: string;
  originalAddress: string;
  totalSupply: string;
}

export const getCollectStats = async ({ address }: Pick<Token, 'address'>): Promise<CollectStats> => {
  const [_totalSupply, _originalNFTAddress] = await Promise.all([
    totalSupply({ address }),
    originalNFTAddress({ address }),
  ]);

  return {
    tokenAddress: address,
    originalAddress: _originalNFTAddress,
    totalSupply: _totalSupply,
  };
};

export const getNFTAddressBySBT = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const _originalNFTAddress = await originalNFTAddress({ address });
  return _originalNFTAddress;
};

export const getBurnerAddress = () => HORCRUXX_BURNER_ADDRESS;
