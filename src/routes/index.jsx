import Login from "@/pages/login";
import News from "@/pages/news/index";
import Volunter from "@/pages/volunter";
import Dashboard from "@/pages/dashboard";
import Transaction from "@/pages/transaction";
import EditUser from "@/pages/customer/edit-customer";
import OTPPage from "@/pages/login/forgot-password/OTPPage";
import User from "@/pages/customer/index";
import DetailVolunter from "@/pages/volunter/detail-volunteer-vacancies";
import DetailTransaction from "@/pages/transaction/detail-transaction";
import ForgotPasswordPage from "@/pages/login/forgot-password/ForgotPasswordPage";
import RePasswordPage from "@/pages/login/forgot-password/RePasswordPage";
import DetailFundraise from "@/pages/fundraising/detail-fundraise";
import AddFundraise from "@/pages/fundraising/add-fundraise";
import ResponseForm from "@/pages/list-registered/detail-registrant";
import RepasswordSuccess from "@/pages/login/forgot-password/RepasswordSuccess";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fundraise from "@/pages/fundraising/index";
import NewsDetail from "@/pages/news/detail-news";
import LandingPage from "@/pages/landing-page";
import AddNews from "@/pages/news/add-news";
import AddVolunterForm from "@/pages/volunter/add-volunteer-vacancies";
import Registrants from "@/pages/list-registered";
import Page404 from "@/pages/404/index";
import ProtectedRoutes from "./protected-routes";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
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
          element: <DetailTransaction />,
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
          path: "/berita/tambah-berita",
          element: <AddNews />,
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
          element: <DetailVolunter />,
        },
        {
          path: "/lowongan-relawan/tambah-lowongan-relawan",
          element: <AddVolunterForm />,
        },
        {
          path: "/lowongan-relawan/:id/pendaftar",
          element: <Registrants />,
        },
        {
          path: "/lowongan-relawan/:vacancyId/pendaftar/:volunteerId",
          element: <ResponseForm />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
