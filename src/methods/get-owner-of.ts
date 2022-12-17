export interface OwnerOfParams {
  address: string; // sbt address
  tokenId: string;
}

export interface OwnerOf {
  ownerAddress: string;
}

export const getCollectStats = (params: OwnerOfParams): OwnerOf => {
  return {
    ownerAddress: '0x57197095b55b947ba3Ab9ae608ff3AcbEFa58b80',
  };
};
