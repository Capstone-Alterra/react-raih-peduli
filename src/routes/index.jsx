
import Login from "@/pages/login";
import ForgotPasswordPage from "@/pages/login/forgot-password/ForgotPasswordPage";
import OTPPage from "@/pages/login/forgot-password/OTPPage";
import RePasswordPage from "@/pages/login/forgot-password/RePasswordPage";
import Dashboard from '@/pages/dashboard';
import FundraisingForm from '@/pages/fundraising/form';
import Fundraising from '@/pages/fundraising/index';
import EditUser from '@/pages/customer/edit.jsx';
import Transaction from '@/pages/transaction';
import TransactionDetail from '@/pages/transaction/transaction-detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from '@/pages/customer/index';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/lupa-password",
      element: <ForgotPasswordPage />,
    },
    {
      path:"/otp-password",
      element: <OTPPage />,
    },
    {
      path: "/repassword",
      element: <RePasswordPage/>
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/pelanggan',
      element: <User />,
    },
    {
      path: '/pelanggan/:id',
      element: <EditUser />,
    },
    {
      path: '/transaksi',
      element: <Transaction />,
    },
    {
      path: '/transaksi/:id',
      element: <TransactionDetail />,
    },
    {
      path: '/penggalangan-dana',
      element: <Fundraising />,
    },
    {
      path: '/penggalangan-dana/:id',
      element: <FundraisingForm />,
    },
    {
      path: '*',
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}