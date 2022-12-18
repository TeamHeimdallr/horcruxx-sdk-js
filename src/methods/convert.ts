import { signAndSendTx, getContract } from '~/utils/contract';
import { verfiyAccount } from '~/utils/errors';
import { getAccount } from '~/utils/account';
import { web3 } from '~/config';

export interface ConvertFromNFTParams {
  nftAddress: string;
  sbtAddress: string;
  tokenId: string;
}

export interface ConvertFromNFT {
  success: boolean;
}

export const convertFromNFT = async (params: ConvertFromNFTParams): Promise<ConvertFromNFT> => {
  const nftContract = getContract(params.nftAddress);

  verfiyAccount();

  const encoded = nftContract.methods
    .safeTransferFrom(getAccount().address, params.sbtAddress, web3.eth.abi.encodeParameter('uint256', params.tokenId))
    .encodeABI();
  await signAndSendTx({ to: params.nftAddress, data: encoded, account: getAccount() });

  return {
    success: true,
  };
};
