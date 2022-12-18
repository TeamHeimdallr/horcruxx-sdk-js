import { SBTContract } from '~/config';

export const locked = async (tokenId: string): Promise<boolean> => {
  const res = (await SBTContract.methods.locked(tokenId).call()) as boolean;
  return res;
};

export const lock = async (tokenId: string): Promise<void> => {
  await SBTContract.methods.lock(tokenId).call();
};

export const unlock = async (tokenId: string): Promise<void> => {
  await SBTContract.methods.unlock(tokenId).call();
};
