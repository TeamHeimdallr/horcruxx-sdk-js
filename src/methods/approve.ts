import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export interface ApproveParams {
  to: string;
  tokenId: string;
  collectionAddress: string;
}
export const approve = async ({ to, collectionAddress, tokenId }: ApproveParams): Promise<void> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  await contract.methods.approve(to, tokenId).call();
};

export interface SetApprovelForAllParams {
  operator: string;
  approved?: boolean;
  collectionAddress: string;
}
export const setApprovalForAll = async ({
  operator,
  approved,
  collectionAddress,
}: SetApprovelForAllParams): Promise<void> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  await contract.methods.setApprovalForAll(operator, approved).call();
};

export interface GetApprovedParams {
  tokenId: string;
  collectionAddress: string;
}
export type ApprovedAddress = string;
export const getApproved = async ({ tokenId, collectionAddress }: GetApprovedParams): Promise<ApprovedAddress> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const res = (await contract.methods.getApproved(tokenId).call()) as ApprovedAddress;
  return res;
};

export interface IsApprovedForAllParams {
  owner: string;
  operator: string;
  collectionAddress: string;
}
export type ApprovedForAll = boolean;
export const isApprovedForAll = async ({
  owner,
  operator,
  collectionAddress,
}: IsApprovedForAllParams): Promise<ApprovedForAll> => {
  const contract = new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], collectionAddress);

  const res = (await contract.methods.isApprovedForAll(owner, operator).call()) as ApprovedForAll;
  return res;
};
