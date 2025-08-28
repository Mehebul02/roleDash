// src/pages/dashboard/admin/AdminDashboard.tsx
import { Outlet } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import { Dashboard, People, Store } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function AdminDashboard() {
  return (
    <DashboardLayout
      title="Admin Dashboard"
      menuItems={[
        { label: "Overview", icon: <Dashboard />, path: "/dashboard/admin" },
        { label: "Manage Users", icon: <People />, path: "/dashboard/admin/users" },
        { label: "Merchants", icon: <Store />, path: "/dashboard/admin/merchants" },
      ]}
    >
      {/* Default overview content */}
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Dashboard Overview
        </Typography>
        {/* এখানে stats, charts, tables ইত্যাদি দিতে পারবে */}
      </Box>

      {/* Nested routes will render here */}
      <Outlet />
    </DashboardLayout>
  );
}
