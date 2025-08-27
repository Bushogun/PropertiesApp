import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/",
  headers: {
    Accept: '*/*',
  },
  timeout: 60000 * 3,
});

export default api;