import Dashboard from '@/pages/dashboard';
import Fundraising from '@/pages/fundraising/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/fundraising',
      element: <Fundraising />,
    },
    {
      path: '*',
      element: <div>404 page found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
