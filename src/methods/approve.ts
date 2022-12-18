import { SBTContract } from '~/config';

export const getApproved = async (tokenId: string): Promise<string> => {
  const res = (await SBTContract.methods.getApproved(tokenId).call()) as string;
  return res;
};

export interface ApprovedForAllParams {
  owner: string;
  operator: string;
}
export const isApprovedForAll = async ({ owner, operator }: ApprovedForAllParams): Promise<boolean> => {
  const res = (await SBTContract.methods.isApprovedForAll(owner, operator).call()) as boolean;
  return res;
};
export interface ApproveParams {
  to: string;
  tokenId: string;
}
export const approve = async ({ to, tokenId }: ApproveParams): Promise<void> => {
  await SBTContract.methods.approve(to, tokenId).call();
};
export interface SetApprovalForAllParams {
  operator: string;
  approved?: boolean;
}
export const setApprovalForAll = async ({ operator, approved }: SetApprovalForAllParams): Promise<void> => {
  await SBTContract.methods.setApprovalForAll(operator, approved).call();
};
