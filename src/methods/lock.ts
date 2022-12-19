import { Token } from '~/types';
import { getAccount } from '~/utils/account';
import { getContract, signAndSendTx } from '~/utils/contract';

export const locked = async ({ address, tokenId }: Token): Promise<boolean> => {
  const contract = getContract(address);
  const res = (await contract.methods.locked(tokenId).call()) as boolean;
  return res;
};

export const lock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  const encoded = contract.methods.lock(tokenId).encodeABI();

  await signAndSendTx({ to: address, data: encoded });
};

export const unlock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  const encoded = contract.methods.unlock(tokenId).encodeABI();

  await signAndSendTx({ to: address, data: encoded });
};
