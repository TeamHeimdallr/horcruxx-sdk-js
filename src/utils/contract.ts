import { AbiItem } from 'web3-utils';
import { Account } from 'web3-core';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export interface SignAndSendTxParams {
  to: string;
  data: string;
  account: Account;
}

export const getContract = (address?: string) =>
  address
    ? new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], address)
    : new web3.eth.Contract(ERC721ABI_SBT as AbiItem[]);

export const signAndSendTx = async ({ to, data, account }: SignAndSendTxParams): Promise<void> => {
  const block = await web3.eth.getBlock('latest');
  const gasLimit = Math.round(block.gasLimit / Math.max(block.transactions.length, 1));

  const tx = {
    gas: gasLimit,
    to,
    data,
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, account.privateKey);
  web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('error', console.error);
};
