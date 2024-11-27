


import axios from 'axios';
import { useContext } from 'react';
import { getTokenAsyncStorage } from './auth_helper';
export const API_URL = 'https://apps.mydermrecruiter.com/public/';

const axiosApi = axios.create({ baseURL: API_URL });

axiosApi.interceptors.request.use(async function (config: any) {

  const details = await getTokenAsyncStorage();
  const token = details;
  config.headers.Authorization = `Bearer ${token}`;
  // config.headers.Authorization = `${token}`;
  return config;
});
axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);


export async function get(url: string, config = {}) {

  return await axiosApi.get(url, { ...config }).then(response =>response.data);
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response?.data);
}



