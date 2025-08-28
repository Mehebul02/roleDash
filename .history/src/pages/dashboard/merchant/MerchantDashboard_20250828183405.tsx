// src/pages/dashboard/MerchantDashboard.tsx

import { Dashboard, Notifications, People } from "@mui/icons-material"
import DashboardLayout from "../../../components/DashboardLayout"
import type { Outlet } from "react-router"

export default function MerchantDashboard() {
  return (
    <DashboardLayout
      title="Merchant Dashboard"
      menuItems={[
        { label: "Overview", icon: <Dashboard />, path: "/dashboard/merchant" },
        { label: "Notifications", icon: <Notifications />, path: "/dashboard/merchant/notifications" },
        { label: "Customers", icon: <People />, path: "/dashboard/merchant/customers" },
      ]}
    >
    <Outlet
    </DashboardLayout>
  )
}
