// src/pages/dashboard/MemberDashboard.tsx

import { Dashboard } from "@mui/icons-material"
import DashboardLayout from "../../../components/DashboardLayout"
import { Outlet } from "react-router"

export default function MemberDashboard() {
  return (
    <DashboardLayout
      title="Member Dashboard"
      menuItems={[
        { label: "Overview", icon: <Dashboard />, path: "/dashboard/member" },
      ]}
    >
    
      <Outlet />
    </DashboardLayout>
  )
}
