import axios, { AxiosRequestConfig, Method } from 'axios';

export type ApiCallOptions = Omit<AxiosRequestConfig, 'url' | 'method'>;

export const apiCall = async <T>(method: Method, url: string, options?: ApiCallOptions) => {
  try {
    const response = await axios({ method, url, ...options });
    return response.data as T;
  } catch (error) {
    console.log(error);
  }
};
