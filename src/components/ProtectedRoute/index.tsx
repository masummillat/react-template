import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetchProfile } from "@src/rest-apis";
import DashboardLayout from "../Layouts/DashboardLayout";
import { Suspense } from "react";
import IconLogo from "@assets/images/logos/icon-logo.svg?react";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const { data, isLoading: isProfileLoading } = useFetchProfile({
    enabled: isAuthenticated,
  });

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" />;
  }

  if (isLoading || isProfileLoading || !data) {
    return (
      <div className="h-dvh w-dvw flex justify-center items-center">
        <IconLogo className="animate-pulse" width={100} height={100} />
      </div>
    );
  }
  if (data)
    return (
      <Suspense fallback={<div>loading...</div>}>
        <DashboardLayout user={data}>
          <Outlet />
        </DashboardLayout>
      </Suspense>
    );
  return <h1>Couldn't fetch user data</h1>;
};

export default ProtectedRoute;
