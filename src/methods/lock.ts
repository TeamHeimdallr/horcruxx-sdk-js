import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export const locked = async ({ address, tokenId }: Token): Promise<boolean> => {
  const contract = getContract(address);
  const res = (await contract.methods.locked(tokenId).call()) as boolean;
  return res;
};

export const lock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  await contract.methods.lock(tokenId).call();
};

export const unlock = async ({ address, tokenId }: Token): Promise<void> => {
  const contract = getContract(address);
  await contract.methods.unlock(tokenId).call();
};
