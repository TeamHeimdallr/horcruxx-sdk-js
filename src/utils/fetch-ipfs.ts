import axios from 'axios';

const IPFS_PREFIX = 'https://ipfs.io/ipfs';
export const ipfs = axios.create({
  baseURL: IPFS_PREFIX,
  headers: { 'Content-type': 'application/json' },
  withCredentials: true,
});
