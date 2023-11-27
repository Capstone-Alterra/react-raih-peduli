import Login from "@/pages/login";
import News from "@/pages/news/index";
import Volunter from "@/pages/volunter";
import Dashboard from "@/pages/dashboard";
import Transaction from "@/pages/transaction";
import EditUser from "@/pages/customer/edit.jsx";
import OTPPage from "@/pages/login/forgot-password/OTPPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "@/pages/customer/index";
import NewsDetail from "@/pages/news/form";
import VolunterForm from "@/pages/volunter/form";
import DetailVolunter from "@/pages/volunter/detail";
import ListVolunter from "@/pages/volunter/list-registered/list-volunter";
import TransactionDetail from "@/pages/transaction/transaction-detail";
import ForgotPasswordPage from "@/pages/login/forgot-password/ForgotPasswordPage";
import RePasswordPage from "@/pages/login/forgot-password/RePasswordPage";
import DetailFundraise from "@/pages/fundraising/detail-fundraise";
import AddFundraise from "@/pages/fundraising/add-fundraise";
import ResponseForm from "@/pages/volunter/response-form";
import RepasswordSuccess from "@/pages/login/forgot-password/RepasswordSuccess";
import Fundraise from "@/pages/fundraising/index";
import LandingPage from "@/pages/landing-page";

export default function Router() {
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
      element: <Dashboard />,
    },
    {
      path: "/pelanggan",
      element: <User />,
    },
    {
      path: "/pelanggan/:id",
      element: <EditUser />,
    },
    {
      path: "/transaksi",
      element: <Transaction />,
    },
    {
      path: "/transaksi/:id",
      element: <TransactionDetail />,
    },
    {
      path: "/penggalangan-dana",
      element: <Fundraise />,
    },
    {
      path: "/penggalangan-dana/tambah-penggalangan-dana",
      element: <AddFundraise />,
    },
    {
      path: "/penggalangan-dana/:id",
      element: <DetailFundraise />,
    },
    {
      path: "/berita",
      element: <News />,
    },
    {
      path: "/berita/:id",
      element: <NewsDetail />,
    },
    {
      path: "/lowongan-relawan",
      element: <Volunter />,
    },
    {
      path: "/lowongan-relawan/:id",
      element: <VolunterForm />,
    },
    {
      path: "/tambah-lowongan-relawan",
      element: <VolunterForm />,
    },
    {
      path: "/detail-lowongan-relawan",
      element: <DetailVolunter />,
    },
    {
      path: "/list-pendaftar-lowongan-relawan",
      element: <ListVolunter />,
    },
    {
      path: "/respon-pendaftar-lowongan-relawan/:id",
      element: <ResponseForm />,
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
