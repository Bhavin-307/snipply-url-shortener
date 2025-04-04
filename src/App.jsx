import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import LandingPage from "./pages/landing";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";
import RedirectLink from "./pages/redirect-link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <Link />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UrlProvider>
      <RouterProvider router={router} />;
    </UrlProvider>
  );
};

export default App;
