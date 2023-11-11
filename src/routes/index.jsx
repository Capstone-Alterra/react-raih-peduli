import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
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
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
