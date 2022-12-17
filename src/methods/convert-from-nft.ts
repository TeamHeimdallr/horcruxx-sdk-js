export interface ConvertFromNFTParams {
  address: string; // nft address
  tokenId: string;
}

export interface ConvertFromNFT {
  success: boolean;
}

export const getCollectStats = (params: ConvertFromNFTParams): ConvertFromNFT => {
  return {
    success: true,
  };
};
