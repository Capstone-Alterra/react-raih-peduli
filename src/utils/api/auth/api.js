import axiosWithConfig from "@/utils/setAxiosWithConfig";

export const login = async (email, password) => {
  const response = await axiosWithConfig.post("/auth/login", { email, password });
  return response.data;
};

export const refreshJwt = async (refreshToken) => {
  const response = await axiosWithConfig.post("/auth/refresh-jwt", { refreshToken });
  return response.data;
};