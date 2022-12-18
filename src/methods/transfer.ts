import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export interface SafeTransferFromParmas extends Token {
  from: string;
  to: string;
  data?: string; // HEX string
}
export const safeTransferFrom = async ({ from, to, address, tokenId, data }: SafeTransferFromParmas): Promise<void> => {
  const contract = getContract(address);

  await contract.methods.safeTransferFrom(from, to, tokenId, data).call();
};

export interface TransferFromParmas extends Token {
  from: string;
  to: string;
}
export const transferFrom = async ({ from, to, address, tokenId }: TransferFromParmas): Promise<void> => {
  const contract = getContract(address);

  await contract.methods.transferFrom(from, to, tokenId).call();
};

export const transferOwnership = async ({ address }: Pick<Token, 'address'>): Promise<void> => {
  const contract = getContract(address);

  await contract.methods.transferOwnership(address).call();
};
