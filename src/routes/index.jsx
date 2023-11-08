import Dashboard from "@/pages/dashboard/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
