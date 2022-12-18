export interface ConvertFromNFTParams {
  address: string; // nft address
  tokenId: string;
}

export interface ConvertFromNFT {
  success: boolean;
}

export const convertFromNFT = async (params: ConvertFromNFTParams): Promise<ConvertFromNFT> => {
  return {
    success: true,
  };
};
