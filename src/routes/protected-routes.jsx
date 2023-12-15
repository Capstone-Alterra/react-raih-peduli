import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "@/utils/context/token";
import { useCookies } from "react-cookie";

const ProtectedRoutes = () => {
  const { token } = useToken();
  const { pathname } = useLocation();
  const [cookies] = useCookies(["refreshToken"]);

  const authProtected = ["/login"];

  const protectedByToken = [
    "/dashboard",
    "/pelanggan",
    "/pelanggan/:id",
    "/transaksi",
    "/transaksi/:id",
    "/penggalangan-dana",
    "/penggalangan-dana/tambah-penggalangan-dana",
    "/penggalangan-dana/:id",
    "/berita",
    "/berita/:id",
    "/lowongan-relawan",
    "/lowongan-relawan/:id",
    "/tambah-lowongan-relawan",
    "/detail-lowongan-relawan",
    "/list-pendaftar-lowongan-relawan",
    "/respon-pendaftar-lowongan-relawan/:id",
  ];

  const rememberPassword = ["/lupa-password", "/repassword", "/otp-password", "/lupa-password-sukses"];

  if (token && rememberPassword.includes(pathname)) {
    // Tambahkan pengecekan refreshToken di cookies sebelum mengarahkan ke /dashboard
    if (cookies.refreshToken) {
      return <Navigate to="/dashboard" />;
    }
  }

  if (authProtected.includes(pathname)) {
    if (token) {
      // Tambahkan pengecekan refreshToken di cookies sebelum mengarahkan ke /dashboard
      if (cookies.refreshToken) {
        return <Navigate to="/dashboard" />;
      }
    }
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
