export interface BurnerAddressParams {
  address: string; // sbt address
}

export interface BurnerAddress {
  burnerAddress: string;
}

export const getCollectStats = async (params: BurnerAddressParams): Promise<BurnerAddress> => {
  return {
    burnerAddress: '0x000000000000000000000000000000000000dead',
  };
};
