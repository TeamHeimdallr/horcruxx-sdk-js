import { AbiItem } from 'web3-utils';

import ERC721ABI from '~/abi/erc721.json';
import { web3 } from '~/config';

interface ApproveParams {
  to: string;
  tokenId: string;
  collectionAddress: string;
}
export const approve = async ({ to, collectionAddress, tokenId }: ApproveParams): Promise<void> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  await contract.methods.approve(to, tokenId).call();
};

interface SetApprovelForAllParams {
  operator: string;
  approved?: boolean;
  collectionAddress: string;
}
export const setApprovalForAll = async ({
  operator,
  approved,
  collectionAddress,
}: SetApprovelForAllParams): Promise<void> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  await contract.methods.setApprovalForAll(operator, approved).call();
};

interface GetApprovedParams {
  tokenId: string;
  collectionAddress: string;
}
export const getApproved = async ({ tokenId, collectionAddress }: GetApprovedParams): Promise<string> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  const res = (await contract.methods.getApproved(tokenId).call()) as string;
  return res;
};

interface IsApprovedForAllParams {
  owner: string;
  operator: string;
  collectionAddress: string;
}
export const isApprovedForAll = async ({
  owner,
  operator,
  collectionAddress,
}: IsApprovedForAllParams): Promise<boolean> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  const res = (await contract.methods.isApprovedForAll(owner, operator).call()) as boolean;
  return res;
};
