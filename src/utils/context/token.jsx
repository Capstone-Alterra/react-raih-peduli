import {
    createContext,
    useState,
    useMemo,
    useContext,
    useCallback,
  } from "react";
  
  const contextValue = {
    token: "",
    changeToken: () => {},
  };
  
  const TokenContext = createContext(contextValue);
  
  function TokenProvider({ children }) {
    const initialValue = localStorage.getItem("admin") ?? "";
    const [token, setToken] = useState(initialValue);
  
    const changeToken = useCallback(
      (data) => {
        const newData = data ?? "";
        if (data) {
          localStorage.setItem("admin", newData);
        }else {
            localStorage.removeItem("admin");
        }
        setToken(newData);
      },
      [token]
    );
  
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