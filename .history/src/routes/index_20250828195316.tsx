import PublicRoute from "../components/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        element: <PublicRoute />, // login pages
        children: [
          { path: "/login/admin", element: <AdminLogin /> },
          { path: "/login/merchant", element: <MerchantLogin /> },
          { path: "/login/member", element: <MemberLogin /> },
        ],
      },

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
