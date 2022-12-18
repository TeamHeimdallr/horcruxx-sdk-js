import { Token } from '~/types';
import { getContract, signAndSendTx } from '~/utils/contract';
import { getAccount } from '~/utils/account';
import { verfiyAccount } from '~/utils/errors';

export const locked = async ({ address, tokenId }: Token): Promise<boolean> => {
  const contract = getContract(address);
  const res = (await contract.methods.locked(tokenId).call()) as boolean;
  return res;
};

export const lock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  const encoded = contract.methods.lock(tokenId).encodeABI();

  verfiyAccount();
  await signAndSendTx({ to: address, data: encoded, account: getAccount() });
};

export const unlock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  const encoded = contract.methods.unlock(tokenId).encodeABI();

  verfiyAccount();
  await signAndSendTx({ to: address, data: encoded, account: getAccount() });
};
