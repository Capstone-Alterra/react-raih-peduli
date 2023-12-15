import { createContext, useState, useMemo, useContext, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import axiosWithConfig from "../setAxiosWithConfig";
import { refreshJwt } from "../api/auth";

const contextValue = {
  token: "",
  refreshToken: "",
  changeToken: () => {},
};

const TokenContext = createContext(contextValue);

function TokenProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState(cookies.refreshToken || "");

  const changeToken = useCallback(
    (newAccessToken, newRefreshToken) => {
      setToken(newAccessToken);

      if (newRefreshToken) {
        setRefreshToken(newRefreshToken);
        setCookie("refreshToken", newRefreshToken, { path: "/" });
      } else {
        setRefreshToken("");
        removeCookie("refreshToken", { path: "/" });
      }
    },
    [setCookie, removeCookie]
  );

  const tokenContextValue = useMemo(
    () => ({
      token: token || "",
      refreshToken,
      changeToken,
    }),
    [token, refreshToken, changeToken]
  );

  useEffect(() => {
    const refreshInterval = setInterval(async () => {
      try {
        if (refreshToken) {
          const response = await refreshJwt(refreshToken, token);
          const newAccessToken = response.data.access_token;
          const newRefreshToken = response.data.refresh_token;

          changeToken(newAccessToken, newRefreshToken);
        }
      } catch (error) {
        console.error("Gagal memperbarui token:", error);
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [refreshToken, token, changeToken]);

  axiosWithConfig.interceptors.response.use(
    (response) => {
      if (response.data && response.data.data) {
        const { access_token, refresh_token } = response.data.data;
        changeToken(access_token, refresh_token || "");
      }
      return response;
    },
    async (error) => {
      if (error.response?.status === 401) return Promise.reject(error);
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
