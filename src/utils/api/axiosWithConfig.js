import axios from "axios";

let accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const axiosWithConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const setAxiosConfig = (token) => {
  accessToken = token;
};

axiosWithConfig.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default axiosWithConfig;
