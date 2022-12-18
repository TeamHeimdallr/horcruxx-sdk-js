import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export const name = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const name = (await contract.methods.name().call()) as string;
  return name;
};

export const owner = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const owner = (await contract.methods.owner().call()) as string;
  return owner;
};

export const ownerOf = async ({ address, tokenId }: Token): Promise<string> => {
  const contract = getContract(address);

  const owner = (await contract.methods.ownerOf(tokenId).call()) as string;
  return owner;
};

export const originalNFTAddress = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const nftAddress = (await contract.methods.originalNFTAddress().call()) as string;
  return nftAddress;
};

export const setOriginalNFTAddress = async ({ address }: Pick<Token, 'address'>): Promise<void> => {
  const contract = getContract(address);

  await contract.methods.setOriginalNFTAddress(address).call();
};

export const symbol = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);

  const symbol = (await contract.methods.symbol().call()) as string;
  return symbol;
};

export const tokenUri = async ({ address, tokenId }: Token): Promise<string> => {
  const contract = getContract(address);

  const tokenUri = (await contract.methods.tokenURI(tokenId).call()) as string;
  return tokenUri;
};