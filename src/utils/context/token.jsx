// token.jsx

import { createContext, useState, useMemo, useContext, useCallback } from "react";
import { useCookies } from "react-cookie";
import axiosWithConfig from "../setAxiosWithConfig";

const contextValue = {
  token: "",
  changeToken: () => {},
};

const TokenContext = createContext(contextValue);

function TokenProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken", "refreshToken"]);

  const [token, setToken] = useState(cookies.accessToken || "");
  const [refreshToken, setRefreshToken] = useState(cookies.refreshToken || "");

  const changeToken = useCallback(
    (newAccessToken, newRefreshToken) => {
      if (newAccessToken && newRefreshToken) {
        setToken(newAccessToken);
        setRefreshToken(newRefreshToken);

        setCookie("accessToken", newAccessToken, { path: "/" });
        setCookie("refreshToken", newRefreshToken, { path: "/" });
      } else {
        setToken("");
        setRefreshToken("");

        removeCookie("accessToken", { path: "/" });
        removeCookie("refreshToken", { path: "/" });
      }
    },
    [setCookie, removeCookie]
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      refreshToken,
      changeToken,
    }),
    [token, refreshToken, changeToken]
  );

  axiosWithConfig.interceptors.response.use(
    (response) => {
      if (response.data && response.data.data) {
        const { access_token, refresh_token } = response.data.data;
        changeToken(access_token, refresh_token);
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
    console.error("ERROR, useToken must be used within TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
