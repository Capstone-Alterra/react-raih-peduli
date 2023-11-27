import Login from "@/pages/login";
import ForgotPasswordPage from "@/pages/login/forgot-password/ForgotPasswordPage";
import OTPPage from "@/pages/login/forgot-password/OTPPage";
import RePasswordPage from "@/pages/login/forgot-password/RePasswordPage";
import Dashboard from "@/pages/dashboard";
import FundraisingForm from "@/pages/fundraising/form";
import Fundraising from "@/pages/fundraising/index";
import EditUser from "@/pages/customer/edit.jsx";
import Transaction from "@/pages/transaction";
import TransactionDetail from "@/pages/transaction/transaction-detail";
import User from "@/pages/customer/index";
import News from "@/pages/news/index";
import NewsDetail from "@/pages/news/form";
import Volunter from "@/pages/volunter";
import VolunterForm from "@/pages/volunter/form";
import DetailVolunter from "@/pages/volunter/detail";
import ListVolunter from "@/pages/volunter/list-volunter";
import ResponseForm from "@/pages/volunter/response-form";
import RepasswordSuccess from "@/pages/login/forgot-password/RepasswordSuccess";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/setAxiosWithConfig";
import { useToken } from "@/utils/context/token";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig(token, "http://34.128.91.0:8000");
  }, [token]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/lupa-password-sukses",
      element: <RepasswordSuccess />,
    },
    {
      path: "/lupa-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/otp-password",
      element: <OTPPage />,
    },
    {
      path: "/repassword",
      element: <RePasswordPage />,
    },
    {
      path: "/dashboard",
      element: token === "" ? <Navigate to="/login" /> : <Dashboard />,
    },
    {
      path: "/pelanggan",
      element: token === "" ? <Navigate to="/login" /> : <User />,
    },
    {
      path: "/pelanggan/:id",
      element: token === "" ? <Navigate to="/login" /> : <EditUser />,
    },
    {
      path: "/transaksi",
      element: token === "" ? <Navigate to="/login" /> : <Transaction />,
    },
    {
      path: "/transaksi/:id",
      element: token === "" ? <Navigate to="/login" /> : <TransactionDetail />,
    },
    {
      path: "/penggalangan-dana",
      element: token === "" ? <Navigate to="/login" /> : <Fundraising />,
    },
    {
      path: "/penggalangan-dana/:id",
      element: token === "" ? <Navigate to="/login" /> : <FundraisingForm />,
    },
    {
      path: "/berita",
      element: token === "" ? <Navigate to="/login" /> : <News />,
    },
    {
      path: "/berita/:id",
      element: token === "" ? <Navigate to="/login" /> : <NewsDetail />,
    },
    {
      path: "/lowongan-relawan",
      element: token === "" ? <Navigate to="/login" /> : <Volunter />,
    },
    {
      path: "/lowongan-relawan/:id",
      element: token === "" ? <Navigate to="/login" /> : <VolunterForm />,
    },
    {
      path: "/tambah-lowongan-relawan",
      element: token === "" ? <Navigate to="/login" /> : <VolunterForm />,
    },
    {
      path: "/detail-lowongan-relawan",
      element: token === "" ? <Navigate to="/login" /> : <DetailVolunter />,
    },
    {
      path: "/list-pendaftar-lowongan-relawan",
      element: token === "" ? <Navigate to="/login" /> : <ListVolunter />,
    },
    {
      path: "/respon-pendaftar-lowongan-relawan/:id",
      element: token === "" ? <Navigate to="/login" /> : <ResponseForm />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
