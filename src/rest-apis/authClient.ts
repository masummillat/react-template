import { BASE_API_URL } from '@src/constants';
import { getAccessToken } from '@src/libs/http-auth0-client';
import axios from 'axios';

const createInstance = async () => {

    const token = await getAccessToken();
    const instance = axios.create({
      baseURL: BASE_API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  instance.interceptors.response.use(
      (res) => {
          return res.data;
      },
      (err) => {
          return Promise.reject(err.response.data);
      },
  );
  return instance;
  }
  export const authClient =  createInstance()


