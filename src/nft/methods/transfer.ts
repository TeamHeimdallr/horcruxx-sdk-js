import { AbiItem } from 'web3-utils';

import ERC721ABI from '~/abi/erc721.json';
import { web3 } from '~/config';

interface SafeTransferFromParmas {
  from: string;
  to: string;
  collectionAddress: string;
  tokenId: string;
  data?: string; // HEX string
}
export const safeTransferFrom = async ({
  from,
  to,
  tokenId,
  collectionAddress,
  data,
}: SafeTransferFromParmas): Promise<void> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  await contract.methods.safeTransferFrom(from, to, tokenId, data).call();
};

interface TransferFromParmas {
  from: string;
  to: string;
  collectionAddress: string;
  tokenId: string;
}
export const transferFrom = async ({ from, to, tokenId, collectionAddress }: TransferFromParmas): Promise<void> => {
  const contract = new web3.eth.Contract(ERC721ABI as AbiItem[], collectionAddress);

  await contract.methods.transferFrom(from, to, tokenId).call();
};
