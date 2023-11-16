import Dashboard from "@/pages/dashboard";
import FundraisingForm from "@/pages/fundraising/fundaraising-form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/fundraising",
      element: <fundraising />,
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
