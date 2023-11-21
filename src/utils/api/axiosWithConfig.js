import axios from "axios";

let accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA1ODAwNDMsImlhdCI6MTcwMDU3OTQ0Mywicm9sZV9pZCI6IjIiLCJ1c2VyX2lkIjoiMzMifQ.Wvc3eIjCTx_QUmAD_r4MwKClqa21Yp5iz3cFK5llzxE";

const axiosWithConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// export const setAxiosConfig = (token) => {
//   accessToken = token;
// };

axiosWithConfig.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default axiosWithConfig;
