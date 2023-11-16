import Dashboard from "@/pages/dashboard";
import FundraisingForm from "@/pages/fundraising/fundaraising-form";
import Fundraising from "@/pages/fundraising/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "@/pages/customer/index"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/fundraising",
      element: <Fundraising />,
    },
    {
      path: "/fundraising-form",
      element: <FundraisingForm />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}