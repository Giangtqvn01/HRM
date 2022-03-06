import axios from 'axios';

import { history } from 'App';
import { getToken } from 'utils/storage';

const baseURL = process.env.REACT_APP_BACKEND_URL;

let headers = {};

headers.Authorization = `Bearer ${getToken()}`;

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      localStorage.removeItem('token');

      if (history) {
        history.push('/auth/login');
      } else {
        window.location = '/auth/login';
      }
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export const api = axiosInstance;
