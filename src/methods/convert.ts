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

  const val = web3.eth.abi.encodeParameters(
    ['address', 'address', 'uint256'],
    [getAccount().address, params.sbtAddress, web3.utils.toHex(params.tokenId)],
  );
  console.log(val);
  // console.log(decodeUint256(new BN(params.tokenId));

  verfiyAccount();

  // const encoded = nftContract.methods.safeTransferFrom(getAccount().address, params.sbtAddress, val).encodeABI();
  const encoded = nftContract.methods.safeTransferFrom(val).encodeABI();
  await signAndSendTx({ to: params.sbtAddress, data: encoded, account: getAccount() });

  return {
    success: true,
  };
};
