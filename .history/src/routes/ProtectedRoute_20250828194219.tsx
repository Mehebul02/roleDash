// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRole: "admin" | "merchant" | "member";
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRole,
  redirectPath = "/login",
}) => {
  const token = localStorage.getItem("token"); 
  const role = localStorage.getItem("role");  

  if (!token || role !== allowedRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
