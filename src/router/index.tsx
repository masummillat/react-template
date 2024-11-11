import App from "@src/App";
import Login from "@pages/login";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@src/components/ProtectedRoute";
import Dashboard from "@src/pages/dashboard";
import ProfilePage from "@src/pages/profile";
import RootErrorBoundary from "@src/components/ErrorBoundaries/RootErrorBoundary";
import DashboardErrorBoundary from "@src/components/ErrorBoundaries/DashboardErrorBoundary";
import UpgradePage from "@src/pages/upgrade";
import SettingsHomePage from "@src/pages/settings/SettingsHome";
import SettingsRootPage from "@src/pages/settings";
import InvoicesPage from "@src/pages/settings/Invoices";
import UpgradeMainContent from "@src/pages/settings/Upgrade/UpgradeMainContent";
import CheckoutPage from "@src/pages/settings/Upgrade/Checkout";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorBoundary />, // Global error boundary
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            errorElement: <DashboardErrorBoundary />, // Error boundary specific to the Dashboard
            element: <Dashboard />,
          },
          {
            path: "/fall-detection",
            element: <div>Fall Detection</div>,
          },
          {
            path: "/appointment",
            element: <div>AI Companion</div>,
          },
          {
            path: "message",
            element: <div>Message</div>,
          },
          {
            path: "overview",
            element: <div>Overview</div>,
          },
          {
            path: "integration",
            element: <div>Integration</div>,
          },
          {
            path: "help-and-support",
            element: <div>Help and Support</div>,
          },
          {
            path: "/profile",
            element: <ProfilePage />, // ProfilePage will still be handled by RootErrorBoundary
          },
          {
            path: "/upgrade",
            element: <UpgradePage />,
            children: [
              {
                path: "",
                element: <UpgradeMainContent />,
              },
              {
                path: "checkout",
                element: <CheckoutPage />,
              },
            ],
          },
          {
            path: "/settings",
            element: <SettingsRootPage />,
            children: [
              {
                path: "",
                element: <SettingsHomePage />,
              },
              {
                path: "invoices",
                element: <InvoicesPage />,
              },
              {
                path: "upgrade",
                element: <UpgradePage />,
                children: [
                  {
                    path: "",
                    element: (
                      <UpgradeMainContent checkoutUrl="/settings/upgrade/checkout" />
                    ),
                  },
                  {
                    path: "checkout",
                    element: <CheckoutPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/login",
        element: <Login />, // No error boundary, defaults to RootErrorBoundary
      },
    ],
  },
]);
export default routers;
