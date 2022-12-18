import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';
import { CONTRACT_TYPE } from '~/types';

export interface SBTMetadataParams {
  collectionAddress: string;
  tokenId: string;
}

export interface SBTMetadata {
  tokenAddress: string; // sbt address
  originalNftAddress: string; // original nft address
  tokenId: string;
  ownerOf: string; // owner wallet address
  contractType: CONTRACT_TYPE; // 'SBT' | 'NFT'
  name: string;
  symbol: string;
  tokenUri: string; // token ifps uri
  metadata: string; // json string
  minterAddress: string; // sbt minter address
}

export const getSBTMetadata = async ({ collectionAddress, tokenId }: SBTMetadataParams): Promise<SBTMetadata> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const name = (await contract.methods.getSBTMetadata(collectionAddress, tokenId).call()) as SBTMetadata;
  console.log(name);

  return name;
  //   return {
  //     tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
  //     originalNftAddress: '0x79fcdef22feed20eddacbb2587640e45491b757f',
  //     tokenId: '1',
  //     ownerOf: '0x6b02bb2d29a8d60a0dfda3500ed6d43b485d4f24',
  //     contractType: 'SBT',
  //     name: 'mfer',
  //     symbol: 'MFER',
  //     tokenUri: 'https://ipfs.moralis.io:2053/ipfs/QmWiQE65tmpYzcokCheQmng2DCM33DEhjXcPB6PanwpAZo/1',
  //     metadata:
  //       '{"image":"ipfs://QmWmgfYhDWjzVheQyV2TnpVXYnKR25oLWCB2i9JeBxsJbz","name":"mfer #1","description":"mfers by sartoshi","attributes":[{"trait_type":"background","value":"red"},{"trait_type":"type","value":"charcoal mfer"},{"trait_type":"eyes","value":"nerd glasses"},{"trait_type":"mouth","value":"smile"},{"trait_type":"headphones","value":"white headphones"},{"trait_type":"4:20 watch","value":"sub red"},{"trait_type":"hat under headphones","value":"bandana dark gray"},{"trait_type":"shirt","value":"collared shirt blue"}]}',
  //     minterAddress: '0x0bdfd4ad937ff179985276b7f5be7ae3de0229e6',
  //   };
};

export interface SBTCollectionMetadataParams {
  collectionAddress: string;
}

export interface SBTCollectionMetadata {
  tokenAddress: string; // sbt address
  originalNftAddress: string; // original nft address
  name: string;
  symbol: string;
  contractType: CONTRACT_TYPE; // 'SBT' | 'NFT'
  totalSupply: number;
}

export const getSBTCollectionMetadata = async (params: SBTCollectionMetadataParams): Promise<SBTCollectionMetadata> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0x79fcdef22feed20eddacbb2587640e45491b757f',
    contractType: 'SBT',
    name: 'mfer',
    symbol: 'MFER',
    totalSupply: 12302,
  };
};
export interface SBTAttributesParams {
  collectionAddress: string;
  tokenId: string;
}

export interface SBTAttribute {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SBTAttributes {
  tokenAddress: string; // sbt address
  tokenId: string;
  attributes: SBTAttribute[];
}

export const getSBTAttributes = async (params: SBTAttributesParams): Promise<SBTAttributes> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    tokenId: '1',
    attributes: [
      {
        traitType: 'background',
        value: 'red',
      },
      {
        traitType: 'type',
        value: 'charcoal mfer',
      },
      {
        traitType: 'eyes',
        value: 'nerd glasses',
      },
      {
        traitType: 'mouth',
        value: 'smile',
      },
      {
        traitType: 'headphones',
        value: 'white headphones',
      },
      {
        traitType: '4:20 watch',
        value: 'sub red',
      },
      {
        traitType: 'hat under headphones',
        value: 'bandana dark gray',
      },
      {
        traitType: 'shirt',
        value: 'collared shirt blue',
      },
    ],
  };
};

export interface CollectStatsParams {
  collectionAddress: string;
}

export interface CollectStats {
  tokenAddress: string;
  originalNftAddress: string;
  totalSupply: number;
  nftCount: number;
  sbtCount: number;
  numSbtOwners: number;
}

export const getCollectStats = async (params: CollectStatsParams): Promise<CollectStats> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0x79Gfcdef22feed20eddacbb2587640e45491b757f',
    totalSupply: 10021,
    nftCount: 9499,
    sbtCount: 522,
    numSbtOwners: 420,
  };
};

export interface SBTAddressByNFTParams {
  collectionAddress: string;
}

export interface SBTAddressByNFT {
  tokenAddress: string;
  originalNftAddress: string;
}

export const getSBTAddressByNFT = async (params: SBTAddressByNFTParams): Promise<SBTAddressByNFT> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
  };
};

export interface NFTAddressBySBTParams {
  collectionAddress: string;
}

export interface NFTAddressBySBT {
  tokenAddress: string;
  originalNftAddress: string;
}

export const getNFTAddressBySBT = async (params: NFTAddressBySBTParams): Promise<NFTAddressBySBT> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
  };
};

export interface BurnerAddressParams {
  collectionAddress: string;
}

export type BurnerAddress = string;
export const getBurnerAddress = async (params: BurnerAddressParams): Promise<BurnerAddress> => {
  return '0x000000000000000000000000000000000000dead';
};
