import { SBTContract } from '~/config';

export const name = async (): Promise<string> => {
  const name = (await SBTContract.methods.name().call()) as string;
  return name;
};

export const owner = async (): Promise<string> => {
  const owner = (await SBTContract.methods.symbol().call()) as string;
  return owner;
};

export const originalNFTAddress = async (): Promise<string> => {
  const address = (await SBTContract.methods.symbol().call()) as string;
  return address;
};

export const symbol = async (): Promise<string> => {
  const symbol = (await SBTContract.methods.symbol().call()) as string;
  return symbol;
};

export const tokenUri = async (tokenId: string): Promise<string> => {
  const tokenUri = (await SBTContract.methods.tokenUri(tokenId).call()) as string;
  return tokenUri;
};
