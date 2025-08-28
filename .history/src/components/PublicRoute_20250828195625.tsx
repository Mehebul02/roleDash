// src/components/PublicRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
console.log(token, role);
  if (!token && role) {
    if (role === "admin") return <Navigate to="/login/admin" replace />;
    if (role === "merchant") return <Navigate to="/dashboard/merchant" replace />;
    if (role === "member") return <Navigate to="/dashboard/member" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
