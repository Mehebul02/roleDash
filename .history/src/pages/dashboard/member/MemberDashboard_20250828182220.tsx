// src/pages/dashboard/MemberDashboard.tsx

import { Dashboard } from "@mui/icons-material"
import { Typography, Paper } from "@mui/material"
import DashboardLayout from "../../../components/DashboardLayout"

export default function MemberDashboard() {
  return (
    <DashboardLayout
      title="Member Dashboard"
      menuItems={[
        { label: "Overview", icon: <Dashboard />, path: "/dashboard/member" },
      ]}
    >
      {/* <Typography variant="h5" gutterBottom>
        Points Summary
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="body1">Total Points: 1,200</Typography>
        <Typography variant="body1">Redeemed: 300</Typography>
        <Typography variant="body1">Available: 900</Typography>
      </Paper> */}
    </DashboardLayout>
  )
}
