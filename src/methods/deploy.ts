import { Token } from '~/types';
import { getContract } from '~/utils/contract';

/**
 *
 * @param address nft collection contract address
 * @returns sbt collection contract address
 */
export const deploySbt = async ({ address }: Pick<Token, 'address'>): Promise<string> => {
  const contract = getContract(address);
  contract.deploy();
};
