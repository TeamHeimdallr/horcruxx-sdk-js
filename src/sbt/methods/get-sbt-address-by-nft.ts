export interface SBTAddressByNFTParams {
  address: string; // The address of the SBT contract
}

export interface SBTAddressByNFT {
  tokenAddress: string;
  originalNftAddress: string;
}

export const getSBTAttributes = async (params: SBTAddressByNFTParams): Promise<SBTAddressByNFT> => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
  };
};
