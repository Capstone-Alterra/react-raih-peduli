import { createContext, useState, useMemo, useContext, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import axiosWithConfig from "../setAxiosWithConfig";
import { refreshJwt } from "../api/auth";

const contextValue = {
  token: "",
  changeToken: () => {},
};

const TokenContext = createContext(contextValue);

function TokenProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken", "tokenExpiration"]);

  const [token, setToken] = useState(cookies.accessToken || "");
  const [tokenExpiration, setTokenExpiration] = useState(cookies.tokenExpiration || "");

  const changeToken = useCallback(
    async (newAccessToken, expiresIn) => {
      if (newAccessToken) {
        setToken(newAccessToken);
        setTokenExpiration(expiresIn);

        setCookie("accessToken", newAccessToken, { path: "/" });
        setCookie("tokenExpiration", expiresIn, { path: "/" });
      } else {
        setToken("");
        setTokenExpiration("");
        removeCookie("accessToken", { path: "/" });
        removeCookie("tokenExpiration", { path: "/" });
      }
    },
    [setCookie, removeCookie]
  );

  const refreshAndChangeToken = useCallback(async () => {
    try {
      const response = await refreshJwt(token);
      const newAccessToken = response.data.access_token;
      const expiresIn = response.data.expires_in;

      changeToken(newAccessToken, expiresIn);
      return newAccessToken;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      setToken("");
      setTokenExpiration("");

      removeCookie("accessToken", { path: "/" });
      removeCookie("tokenExpiration", { path: "/" });
      return null;
    }
  }, [token, changeToken, removeCookie]);

  useEffect(() => {
    const expirationTime = tokenExpiration ? parseInt(tokenExpiration, 10) * 1000 : null;
    const currentTime = new Date().getTime();

    if (expirationTime && expirationTime - currentTime < 60 * 1000) {
      refreshAndChangeToken();
    }
  }, [tokenExpiration, refreshAndChangeToken]);

  const tokenContextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token, changeToken]
  );

  axiosWithConfig.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response?.status === 401) {
        const newToken = await refreshAndChangeToken();
        if (newToken) {
          error.config.headers.Authorization = `Bearer ${newToken}`;
          return axiosWithConfig.request(error.config);
        }
      }
      return Promise.reject(error);
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
