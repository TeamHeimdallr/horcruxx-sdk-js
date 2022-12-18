import { Token } from '~/types';
import { getContract } from '~/utils/contract';

export const getApproved = async ({ address, tokenId }: Token): Promise<string> => {
  const contract = getContract(address);

  const res = (await contract.methods.getApproved(tokenId).call()) as string;
  return res;
};

export interface ApprovedForAllParams extends Pick<Token, 'address'> {
  owner: string;
  operator: string;
}
export const isApprovedForAll = async ({ owner, operator, address }: ApprovedForAllParams): Promise<boolean> => {
  const contract = getContract(address);

  const res = (await contract.methods.isApprovedForAll(owner, operator).call()) as boolean;
  return res;
};

export interface ApproveParams extends Pick<Token, 'address'> {
  to: string;
  tokenId: string;
}
export const approve = async ({ to, tokenId, address }: ApproveParams): Promise<void> => {
  const contract = getContract(address);

  await contract.methods.approve(to, tokenId).call();
};

export interface SetApprovalForAllParams extends Pick<Token, 'address'> {
  operator: string;
  approved?: boolean;
}
export const setApprovalForAll = async ({ operator, approved, address }: SetApprovalForAllParams): Promise<void> => {
  const contract = getContract(address);

  await contract.methods.setApprovalForAll(operator, approved).call();
};
