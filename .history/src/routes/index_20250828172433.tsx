const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      { path: "/login/admin", element: <AdminLogin /> },
      { path: "/login/merchant", element: <MerchantLogin /> },
      { path: "/login/member", element: <MemberLogin /> },
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
        children: [
          { path: "users", element: <UserDashboard /> },
          // অন্য nested route এখানে দিতে পারো
        ],
      },
    ],
  },
]);

export default router;
