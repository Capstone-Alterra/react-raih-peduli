import Dashboard from "@/pages/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
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
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
