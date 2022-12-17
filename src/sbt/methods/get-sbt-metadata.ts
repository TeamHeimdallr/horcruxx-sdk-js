import { CONTRACT_TYPE } from '~/sbt/types';

export interface SBTMetadataParams {
  address: string; // The address of the SBT contract
  tokenId: string; // The ID of the token
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

export const getSBTMetadata = async (params: SBTMetadataParams): Promise<SBTMetadata> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0x79fcdef22feed20eddacbb2587640e45491b757f',
    tokenId: '1',
    ownerOf: '0x6b02bb2d29a8d60a0dfda3500ed6d43b485d4f24',
    contractType: 'SBT',
    name: 'mfer',
    symbol: 'MFER',
    tokenUri: 'https://ipfs.moralis.io:2053/ipfs/QmWiQE65tmpYzcokCheQmng2DCM33DEhjXcPB6PanwpAZo/1',
    metadata:
      '{"image":"ipfs://QmWmgfYhDWjzVheQyV2TnpVXYnKR25oLWCB2i9JeBxsJbz","name":"mfer #1","description":"mfers by sartoshi","attributes":[{"trait_type":"background","value":"red"},{"trait_type":"type","value":"charcoal mfer"},{"trait_type":"eyes","value":"nerd glasses"},{"trait_type":"mouth","value":"smile"},{"trait_type":"headphones","value":"white headphones"},{"trait_type":"4:20 watch","value":"sub red"},{"trait_type":"hat under headphones","value":"bandana dark gray"},{"trait_type":"shirt","value":"collared shirt blue"}]}',
    minterAddress: '0x0bdfd4ad937ff179985276b7f5be7ae3de0229e6',
  };
};
