export interface NFTAddressBySBTParams {
  address: string;
}

export interface NFTAddressBySBT {
  tokenAddress: string;
  originalNftAddress: string;
}

export const getSBTAttributes = async (params: NFTAddressBySBTParams): Promise<NFTAddressBySBT> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
  };
};
