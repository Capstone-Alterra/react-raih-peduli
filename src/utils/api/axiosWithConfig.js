import axios from "axios";

export const externalAxiosWithConfig = axios.create({
  baseURL: "https://www.emsifa.com/api-wilayah-indonesia/api/",
});

const axiosWithConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosWithConfig;
