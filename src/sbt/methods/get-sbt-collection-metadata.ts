import { CONTRACT_TYPE } from '~/sbt/types';

export interface SBTCollectionMetadataParams {
  address: string; // The address of the SBT contract
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
