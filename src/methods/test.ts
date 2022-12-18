import { deploySbt } from './deploy';
import { connect } from './connect';

connect('should be set valid private key');

deploySbt({
  address: '0xa4e1EE041415eE102DaF131663B552E5779C1b98',
  name: 'SBTTEST',
  symbol: 'SBTTTT',
});
