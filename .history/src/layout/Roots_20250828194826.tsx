import { Navigate, Outlet } from "react-router-dom";

const Roots = () => {
   const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
//   if (role === "admin") return <Navigate to="/dashboard/admin" replace />;
  if (role === "merchant") return <Navigate to="/dashboard/merchant" replace />;
  if (role === "member") return <Navigate to="/dashboard/member" replace />;

  return <Outlet />;
};

export default Roots;
