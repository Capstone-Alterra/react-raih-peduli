import Dashboard from "@/pages/dashboard";
import Transaction from "@/pages/transaction";
import TransactionDetail from "@/pages/transaction/transaction-detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/transaction/1",
      element: <TransactionDetail />,
    },
    {
      path: "/fundraising",
      element: <fundraising />,
    },
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
