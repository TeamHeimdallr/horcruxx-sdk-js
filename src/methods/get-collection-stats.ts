export interface CollectStatsParams {
  address: string;
}

export interface CollectStats {
  tokenAddress: string;
  originalNftAddress: string;
  totalSupply: number;
  nftCount: number;
  sbtCount: number;
  numSbtOwners: number;
}

export const getCollectStats = (params: CollectStatsParams): CollectStats => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    originalNftAddress: '0x79fcdef22feed20eddacbb2587640e45491b757f',
    totalSupply: 10021,
    nftCount: 9499,
    sbtCount: 522,
    numSbtOwners: 420,
  };
};
