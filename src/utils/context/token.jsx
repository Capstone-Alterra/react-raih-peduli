import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { refreshJwt } from "../api/auth";
import axiosWithConfig from "@/utils/api/axiosWithConfig";
import { createContext, useState, useContext } from "react";

const contextValue = {
  profile: "",
  accessToken: "",
  refreshToken: "",
  changeToken: () => {},
  changeProfile: () => {},
};

const TokenContext = createContext(contextValue);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function TokenProvider({ children }) {
  const [profile, setProfile] = useState(Cookies.get("profile") || "");
  const [accessToken, setAccessToken] = useState(Cookies.get("accessToken") || "");
  const [refreshToken, setRefreshToken] = useState(Cookies.get("refreshToken") || "");

  const changeToken = (newAccessToken, newRefreshToken) => {
    const accessToken = newAccessToken ?? "";
    const refreshToken = newRefreshToken ?? "";

    if (accessToken && refreshToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      Cookies.set("accessToken", accessToken, { path: "/", expires: 1 });
      Cookies.set("refreshToken", refreshToken, { path: "/", expires: 1 });
    } else {
      setAccessToken("");
      setRefreshToken("");

      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    }
  };

  const changeProfile = (profile) => {
    const newProfile = profile ?? "";

    if (newProfile) {
      setProfile(newProfile);
      Cookies.set("profile", JSON.stringify(newProfile), { expires: 1 });
    } else {
      setProfile("");
      Cookies.remove("profile");
    }
  };

  const tokenContextValue = {
    accessToken,
    refreshToken,
    profile,
    changeToken,
    changeProfile,
  };

  axiosWithConfig.interceptors.request.use((config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  });

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        if (accessToken && refreshToken) {
          try {
            const { access_token, refresh_token } = await refreshJwt(accessToken, refreshToken);
            changeToken(access_token, refresh_token);
            originalRequest._retry = true;
            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            return axiosWithConfig(originalRequest);
          } catch (error) {
            changeToken("");
            Toast.fire({ icon: "warning", title: "Sesi anda sudah berakhir, mohon login kembali" });
            return Promise.reject(error);
          }
        }
      } else {
        return Promise.reject(error);
      }
    }
  );

  return <TokenContext.Provider value={tokenContextValue}>{children}</TokenContext.Provider>;
}

function useToken() {
  const tokenContext = useContext(TokenContext);

  if (tokenContext === undefined) {
    console.error("ERROR, useToken harus digunakan dalam TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
