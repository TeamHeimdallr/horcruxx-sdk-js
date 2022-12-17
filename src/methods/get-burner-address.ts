export interface BurnerAddressParams {
  address: string; // sbt address
}

export interface BurnerAddress {
  burnerAddress: string;
}

export const getCollectStats = (params: BurnerAddressParams): BurnerAddress => {
  return {
    burnerAddress: '0x000000000000000000000000000000000000dead',
  };
};
