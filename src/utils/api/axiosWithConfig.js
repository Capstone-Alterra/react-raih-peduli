import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: "http://35.197.137.181:8000",
});

export default axiosWithConfig;
