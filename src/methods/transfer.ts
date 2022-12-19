import { Token } from '~/types';
import { getAccount } from '~/utils/account';
import { getContract, signAndSendTx } from '~/utils/contract';

export interface SafeTransferFromParmas extends Token {
  from: string;
  to: string;
  data?: string; // HEX string
}
export const safeTransferFrom = async ({ from, to, address, tokenId, data }: SafeTransferFromParmas): Promise<void> => {
  const contract = getContract(address);

  const encoded = contract.methods.safeTransferFrom(from, to, tokenId, data).encodeABI();

  await signAndSendTx({ to: address, data: encoded });
};

export interface TransferFromParmas extends Token {
  from: string;
  to: string;
}
export const transferFrom = async ({ from, to, address, tokenId }: TransferFromParmas): Promise<void> => {
  const contract = getContract(address);

  const encoded = contract.methods.safeTransferFrom(from, to, tokenId).encodeABI();

  await signAndSendTx({ to: address, data: encoded });
};

export interface TransferOwnershipParams extends Pick<Token, 'address'> {
  newOwner: string;
}

export const transferOwnership = async ({ address, newOwner }: TransferOwnershipParams): Promise<void> => {
  const contract = getContract(address);

  const encoded = contract.methods.transferOwnership(newOwner).encodeABI();

  await signAndSendTx({ to: address, data: encoded });
};
