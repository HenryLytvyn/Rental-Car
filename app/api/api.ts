import axios from 'axios';

const baseURL = process.env.REMOTE_SERVER_API_URL;

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
