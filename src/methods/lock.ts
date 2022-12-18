import { Token } from '~/types';
import { getContract, signAndSendTx } from '~/utils/contract';
import { getAccount } from '~/utils/account';

export const locked = async ({ address, tokenId }: Token): Promise<boolean> => {
  const contract = getContract(address);
  const res = (await contract.methods.locked(tokenId).call()) as boolean;
  return res;
};

export const lock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  const encoded = contract.methods.lock(tokenId).encodeABI();

  if (getAccount() == undefined) {
    throw new Error('There is no connected account. Please execute `connect()` function first');
  }
  await signAndSendTx({ to: address, data: encoded, account: getAccount() });
};

export const unlock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  const encoded = contract.methods.unlock(tokenId).encodeABI();

  if (getAccount() == undefined) {
    throw new Error('There is no connected account. Please execute `connect()` function first');
  }
  await signAndSendTx({ to: address, data: encoded, account: getAccount() });
};
