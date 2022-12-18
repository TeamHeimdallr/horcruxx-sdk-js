import { Token } from '~/types';
import { getContract, signAndSendTx } from '~/utils/contract';
import { SBT_BYTECODE } from '~/config/sbt-bytecode';
import { getAccount } from '~/utils/account';
import { verfiyAccount } from '~/utils/errors';
import { setOriginalNFTAddress } from './metadata';

export interface DeploySbtParams extends Pick<Token, 'address'> {
  name: string;
  symbol: string;
}

/**
 *
 * @param address nft collection contract address
 * @returns sbt collection contract address
 */
export const deploySbt = async ({ address, name, symbol }: DeploySbtParams): Promise<string> => {
  const contract = getContract();

  verfiyAccount();
  const tx = contract
    .deploy({
      data: SBT_BYTECODE,
      arguments: [name, symbol],
    })
    .encodeABI();

  const deployedAddress = await signAndSendTx({ data: tx, account: getAccount() }).then(function (receipt) {
    console.log(receipt.contractAddress);
    setOriginalNFTAddress({ address: receipt.contractAddress, nftAddress: address });
    return receipt.contractAddress;
  });

  return deployedAddress;
};
