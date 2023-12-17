import { useToken } from "@/utils/context/token";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { accessToken } = useToken();
  const { pathname } = useLocation();

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

  const rememberPassword = [
    "/lupa-password",
    "/repassword",
    "/otp-password",
    "/lupa-password-sukses",
  ];

  if (accessToken && rememberPassword.includes(pathname)) {
    return <Navigate to="/dashboard" />;
  }

  if (accessToken && authProtected.includes(pathname)) {
    return <Navigate to="/dashboard" />;
  }

  if (!accessToken && protectedByToken.includes(pathname)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
