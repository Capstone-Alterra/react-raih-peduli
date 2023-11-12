import Dashboard from "@/pages/dashboard";
import Edit from "@/pages/customer/edit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/user",
      element: <Edit />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
