export interface OwnerOfParams {
  address: string; // sbt address
  tokenId: string;
}

export interface OwnerOf {
  ownerAddress: string;
}

export const getOwnerOf = async (params: OwnerOfParams): Promise<OwnerOf> => {
  return {
    ownerAddress: '0x57197095b55b947ba3Ab9ae608ff3AcbEFa58b80',
  };
};
