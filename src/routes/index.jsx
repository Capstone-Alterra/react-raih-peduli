import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
