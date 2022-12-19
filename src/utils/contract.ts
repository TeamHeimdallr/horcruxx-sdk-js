import { Account, TransactionReceipt } from 'web3-core';
import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';
import { getAccount } from './account';

export interface SignAndSendTxParams {
  to?: string;
  data: string;
  gas?: number;
}

export const getContract = (address?: string) =>
  address
    ? new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], address)
    : new web3.eth.Contract(ERC721ABI_SBT as AbiItem[]);

export const signAndSendTx = async ({ to, data, gas }: SignAndSendTxParams): Promise<TransactionReceipt> => {
  const block = await web3.eth.getBlock('latest');
  const gasLimit = gas ? gas : Math.round(block.gasLimit / Math.max(block.transactions.length, 1));

  const tx = to
    ? {
        gas: gasLimit,
        to,
        data,
      }
    : {
        gas: gasLimit,
        data,
      };

  const account = getAccount();
  if (account == undefined) {
    let signedTx = await web3.eth.signTransaction(tx);
    return web3.eth.sendSignedTransaction(signedTx.raw).on('error', console.error);
  } else {
    let signedTx = await web3.eth.accounts.signTransaction(tx, account.privateKey);
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('error', console.error);
  }
};
