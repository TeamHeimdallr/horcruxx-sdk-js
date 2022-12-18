export interface DeploySBTContractParams {
  address: string; // sbt address
}
export interface DeploySBTContract {
  sbtAddress: string;
}
export const deploySBTContract = async (params: DeploySBTContractParams): Promise<DeploySBTContract> => {
  return {
    sbtAddress: '0xsbtcdef22feed20eddacbb2587640e45491b757f',
  };
};
