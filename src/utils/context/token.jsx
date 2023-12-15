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
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken", "refreshToken"]);

  // Inisialisasi token dengan string kosong jika tidak ada dalam cookies
  const [token, setToken] = useState(cookies.accessToken || "");
  const [refreshToken, setRefreshToken] = useState(cookies.refreshToken || "");

  // Fungsi untuk mengganti nilai token
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

      setCookie("accessToken", newAccessToken, { path: "/" });
    },
    [setCookie, removeCookie]
  );

  // Nilai konteks memoized untuk mencegah perhitungan berulang
  const tokenContextValue = useMemo(
    () => ({
      // Pastikan token tidak pernah menjadi undefined
      token: token || "",
      refreshToken,
      changeToken,
    }),
    [token, refreshToken, changeToken]
  );

  // Efek samping untuk memperbarui token secara berkala
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

    // Membersihkan interval pada pembongkaran komponen
    return () => clearInterval(refreshInterval);
  }, [refreshToken, token, changeToken]);

  // Interceptor untuk menanggapi perubahan token pada respon axios
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

// Hook untuk menggunakan nilai konteks token
function useToken() {
  const tokenContext = useContext(TokenContext);

  if (tokenContext === undefined) {
    console.error("ERROR, useToken harus digunakan dalam TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
