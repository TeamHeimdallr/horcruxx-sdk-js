import { getAccount } from './account';

export const verfiyAccount = () => {
  if (getAccount() == undefined) {
    throw new Error('There is no connected account. Please execute `connect()` function first');
  }
};
