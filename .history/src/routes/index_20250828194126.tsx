import { createBrowserRouter } from "react-router";

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
import ProtectedRoute from "./ProtectedRoute";

// ধরো তুমি localStorage token দিয়ে check করছো
const isAdminLoggedIn = Boolean(localStorage.getItem("token"));
const isMerchantLoggedIn = Boolean(localStorage.getItem("token"));
const isMemberLoggedIn = Boolean(localStorage.getItem("token"));
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      { path: "/login/admin", element: <AdminLogin /> },
      { path: "/login/merchant", element: <MerchantLogin /> },
      { path: "/login/member", element: <MemberLogin /> },

      // Admin Dashboard
      {
        element: <ProtectedRoute allowedRole="admin" redirectPath="/login/admin" />,
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

      // Merchant Dashboard
      {
        element: <ProtectedRoute allowedRole="merchant" redirectPath="/login/merchant" />,
        children: [
          {
            path: "/dashboard/merchant",
            element: <MerchantDashboard />,
            children: [{ index: true, element: <MerchantOverview /> }],
          },
        ],
      },

      // Member Dashboard
      {
        element: <ProtectedRoute allowedRole="member" redirectPath="/login/member" />,
        children: [
          {
            path: "/dashboard/member",
            element: <MemberDashboard />,
            children: [{ index: true, element: <MemberOverView /> }],
          },
        ],
      },
    ],
  },
]);
