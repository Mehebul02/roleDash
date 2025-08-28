// src/pages/dashboard/MerchantDashboard.tsx

import { Dashboard, Notifications, People } from "@mui/icons-material"
import { Typography, Paper, Button, TextField, List, ListItem } from "@mui/material"
import DashboardLayout from "../../../components/DashboardLayout"

const notifications = ["Approval Request #101", "Approval Request #102"]

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
    
    </DashboardLayout>
  )
}
