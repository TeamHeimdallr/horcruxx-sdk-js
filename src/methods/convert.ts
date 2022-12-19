import { web3 } from '~/config';
import { getAccount } from '~/utils/account';
import { getContract, signAndSendTx } from '~/utils/contract';

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

  const account = getAccount();
  let accountAddress: string;
  if (account == undefined && (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined')) {
    const ethAccounts = await web3.eth.requestAccounts();
    accountAddress = ethAccounts[0];
  } else {
    accountAddress = account.address;
  }

  const encoded = nftContract.methods
    .safeTransferFrom(accountAddress, params.sbtAddress, web3.eth.abi.encodeParameter('uint256', params.tokenId))
    .encodeABI();
  await signAndSendTx({ to: params.nftAddress, data: encoded });

  return {
    success: true,
  };
};
