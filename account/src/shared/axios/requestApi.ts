import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IRequest {
  url: string;
  method?: string | 'GET';
  body?: object | undefined;
  header?: object;
}
export const requestApi = async (payload: IRequest) => {
  try {
    const { url, method = 'GET', body = {}, header = {} } = payload;
    const config: AxiosRequestConfig = {
      method: method,
      baseURL: url,
      data: body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...header,
      },
    };
    const { data, status, headers }: AxiosResponse = await axios(config);
    return {
      data,
      status: status,
      headers: headers,
    };
  } catch (error) {
    throw error;
  }
};
