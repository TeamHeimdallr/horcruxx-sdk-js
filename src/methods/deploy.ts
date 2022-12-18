// import { Token } from '~/types';
// import { getContract } from '~/utils/contract';
// import { SBT_BYTECODE } from '~/config/sbt-bytecode';

// export interface DeploySbtParams extends Pick<Token, 'address'> {
//   name: string;
//   symbol: string;
// }

// /**
//  *
//  * @param address nft collection contract address
//  * @returns sbt collection contract address
//  */
// export const deploySbt = async ({ address, name, symbol }: DeploySbtParams): Promise<string> => {
//   const contract = getContract();

//   contract.deploy({
//     data: SBT_BYTECODE,
//     arguments: [name, symbol, address],
//   })
//   .send({
//       from: '0x1234567890123456789012345678901234567891',
//       gas: 1500000,
//       gasPrice: '30000000000000'
//   }, function(error, transactionHash){ ... })
//   .on('error', function(error){ ... })
//   .on('transactionHash', function(transactionHash){ ... })
//   .on('receipt', function(receipt){
//      console.log(receipt.contractAddress) // contains the new contract address
//   })
//   .on('confirmation', function(confirmationNumber, receipt){ ... })
//   .then(function(newContractInstance){
//       console.log(newContractInstance.options.address) // instance with the new contract address
//   });
// };
