export interface SBTAttributesParams {
  address: string; // The address of the SBT contract
  tokenId: string; // The ID of the token
}

export interface SBTAttribute {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SBTAttributes {
  tokenAddress: string; // sbt address
  tokenId: string;
  attributes: SBTAttribute[];
}

export const getSBTAttributes = (params: SBTAttributesParams): SBTAttributes => {
  return {
    tokenAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
    tokenId: '1',
    attributes: [
      {
        traitType: 'background',
        value: 'red',
      },
      {
        traitType: 'type',
        value: 'charcoal mfer',
      },
      {
        traitType: 'eyes',
        value: 'nerd glasses',
      },
      {
        traitType: 'mouth',
        value: 'smile',
      },
      {
        traitType: 'headphones',
        value: 'white headphones',
      },
      {
        traitType: '4:20 watch',
        value: 'sub red',
      },
      {
        traitType: 'hat under headphones',
        value: 'bandana dark gray',
      },
      {
        traitType: 'shirt',
        value: 'collared shirt blue',
      },
    ],
  };
};
