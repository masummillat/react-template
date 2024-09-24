import App from "@src/App";
import Login from "@pages/login";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@src/components/ProtectedRoute";
import Dashboard from "@src/pages/dashboard";
import ProfilePage from "@src/pages/profile";
import RootErrorBoundary from "@src/components/ErrorBoundaries/RootErrorBoundary";
import DashboardErrorBoundary from "@src/components/ErrorBoundaries/DashboardErrorBoundary";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorBoundary />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        errorElement: <DashboardErrorBoundary />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routers;
