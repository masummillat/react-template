import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetchProfile } from "@src/rest-apis";
import DashboardLayout from "../Layouts/DashboardLayout";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { data } = useFetchProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <DashboardLayout user={data}>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
