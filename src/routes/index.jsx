import Login from "@/pages/login";
import News from "@/pages/news/index";
import Volunter from "@/pages/volunter";
import Dashboard from "@/pages/dashboard";
import Transaction from "@/pages/transaction";
import TransactionDetail from "@/pages/transaction/transaction-detail";
import EditUser from "@/pages/customer/edit.jsx";
import OTPPage from "@/pages/login/forgot-password/OTPPage";
import User from "@/pages/customer/index";
import DetailVolunter from "@/pages/volunter/detail";
import ForgotPasswordPage from "@/pages/login/forgot-password/ForgotPasswordPage";
import RePasswordPage from "@/pages/login/forgot-password/RePasswordPage";
import DetailFundraise from "@/pages/fundraising/detail-fundraise";
import AddFundraise from "@/pages/fundraising/add-fundraise";
import ResponseForm from "@/pages/volunter/list-registered/response-form";
import RepasswordSuccess from "@/pages/login/forgot-password/RepasswordSuccess";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/setAxiosWithConfig";
import { useToken } from "@/utils/context/token";
import Fundraise from "@/pages/fundraising/index";
import NewsDetail from "@/pages/news/detail-news";
import LandingPage from "@/pages/landing-page";
import AddNews from "@/pages/news/add-news";
import AddVolunterForm from "@/pages/volunter/add-form";
import Registrants from "@/pages/volunter/list-registered";

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
      element: token === "" ? <Navigate to="/login" /> : <Fundraise />,
    },
    {
      path: "/penggalangan-dana/tambah-penggalangan-dana",
      element: token === "" ? <Navigate to="/login" /> : <AddFundraise />,
    },
    {
      path: "/penggalangan-dana/:id",
      element: token === "" ? <Navigate to="/login" /> : <DetailFundraise />,
    },
    {
      path: "/berita",
      element: token === "" ? <Navigate to="/login" /> : <News />,
    },
    {
      path: "/berita/tambah-berita",
      element: <AddNews />,
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
      path: "/lowongan-relawan/tambah-lowongan-relawan",
      element: token === "" ? <Navigate to="/login" /> : <AddVolunterForm />,
    },
    {
      path: "/lowongan-relawan/:id",
      element: token === "" ? <Navigate to="/login" /> : <DetailVolunter />,
    },
    {
      path: "/list-pendaftar-lowongan-relawan",
      element: token === "" ? <Navigate to="/login" /> : <Registrants />,
    },
    {
      path: "/respon-pendaftar-lowongan-relawan/:id",
      element: token === "" ? <Navigate to="/login" /> : <ResponseForm />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
