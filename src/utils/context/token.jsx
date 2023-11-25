import {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from "react";

import { useCookies } from "react-cookie";
import axiosWithConfig from "../setAxiosWithConfig";

const contextValue = {
  token: "",
  changeToken: () => {},
};

const TokenContext = createContext(contextValue);

function TokenProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [token, setToken] = useState(cookies.token);

  axiosWithConfig.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        changeToken("");
      }
      return Promise.reject(error);
    }
  );

  const changeToken = useCallback((token) => {
    const newToken = token ?? "";
    setToken(newToken);
    if (token) {
      setCookie("token", newToken, { path: "/" });
    } else {
      removeCookie("token", { path: "/" });
    }
  });

  const tokenContextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const tokenContext = useContext(TokenContext);

  if (tokenContext === undefined) {
    console.log("ERROR, useToken must be used within TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
