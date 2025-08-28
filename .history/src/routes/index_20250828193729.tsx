import { createBrowserRouter } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";
import Roots from "../layout/Roots";
import { AdminLogin } from "../pages/auth/AdminLogin";
import { MemberLogin } from "../pages/auth/MemberLogin ";
import { MerchantLogin } from "../pages/auth/Merchant";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import MerchantsPage from "../pages/dashboard/admin/Merchants";
import OverviewDashboard from "../pages/dashboard/admin/Overview";
import UserDashboard from "../pages/dashboard/admin/UsersPage";
import MemberDashboard from "../pages/dashboard/member/MemberDashboard";
import MemberOverView from "../pages/dashboard/member/MemberOverView";
import MerchantDashboard from "../pages/dashboard/merchant/MerchantDashboard";
import MerchantOverview from "../pages/dashboard/merchant/MerchantOverview";

// ধরো তুমি localStorage token দিয়ে check করছো
const isAdminLoggedIn = Boolean(localStorage.getItem("admin-token"));
const isMerchantLoggedIn = Boolean(localStorage.getItem("merchant-token"));
const isMemberLoggedIn = Boolean(localStorage.getItem("member-token"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      { path: "/login/admin", element: <AdminLogin /> },
      { path: "/login/merchant", element: <MerchantLogin /> },
      { path: "/login/member", element: <MemberLogin /> },

      // Admin Dashboard Protected
      {
        element: <ProtectedRoute isAllowed={isAdminLoggedIn} redirectPath="/login/admin" />,
        children: [
          {
            path: "/dashboard/admin",
            element: <AdminDashboard />,
            children: [
              { index: true, element: <OverviewDashboard /> },
              { path: "users", element: <UserDashboard /> },
              { path: "merchants", element: <MerchantsPage /> },
            ],
          },
        ],
      },

      // Member Dashboard Protected
      {
        element: <ProtectedRoute isAllowed={isMemberLoggedIn} redirectPath="/login/member" />,
        children: [
          {
            path: "/dashboard/member",
            element: <MemberDashboard />,
            children: [{ index: true, element: <MemberOverView /> }],
          },
        ],
      },

      // Merchant Dashboard Protected
      {
        element: <ProtectedRoute isAllowed={isMerchantLoggedIn} redirectPath="/login/merchant" />,
        children: [
          {
            path: "/dashboard/merchant",
            element: <MerchantDashboard />,
            children: [{ index: true, element: <MerchantOverview /> }],
          },
        ],
      },
    ],
  },
]);
