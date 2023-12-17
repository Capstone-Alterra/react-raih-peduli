import axiosWithConfig from "../axiosWithConfig";

export const login = async (email, password) => {
  try {
    const response = await axiosWithConfig.post("/auth/login", {
      email,
      password,
    });
    return response.data.data;
  } catch (error) {
    throw new Error("Email atau kata sandi salah");
  }
};

export const refreshJwt = async (accesToken, refreshToken) => {
  try {
    const response = await axiosWithConfig.post("/auth/refresh-jwt", {
      access_token: accesToken,
      refresh_token: refreshToken,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
