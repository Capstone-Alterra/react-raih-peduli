import axiosWithConfig from "../axiosWithConfig";

export const login = async (email, password) => {
  try {
    const response = await axiosWithConfig.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};

export const refreshJwt = async (token, refreshToken) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosWithConfig.post("/auth/refresh-jwt", { access_token: token, refresh_token: refreshToken });
    return response.data;
  } catch (error) {
    throw error;
  }
};
