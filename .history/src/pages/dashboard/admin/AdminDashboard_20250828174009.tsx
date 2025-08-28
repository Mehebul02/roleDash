// src/pages/dashboard/AdminDashboard.tsx
import { Dashboard, People, Store } from "@mui/icons-material"
import { Outlet } from "react-router-dom"
import DashboardLayout from "../../../components/DashboardLayout"

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
      {/* Nested routes render here */}
      dfgdfgdfg
      <Outlet />
      dfgdfg
    </DashboardLayout>
  )
}
