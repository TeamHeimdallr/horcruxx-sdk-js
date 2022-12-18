import { AbiItem } from 'web3-utils';

import ERC721ABI_SBT from '~/abi/erc721-sbt.json';
import { web3 } from '~/config';

export const getContract = (address: string) => new web3.eth.Contract(ERC721ABI_SBT as AbiItem[], address);
