import axios from "axios";

let accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjoiMiIsInVzZXJfaWQiOiIxIiwiaWF0IjoxNTE2MjM5MDIyfQ.rdcs2MjPJKRFRLQvBIqttWf3KCBD5vkWe73_w3OJ5PM";

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
