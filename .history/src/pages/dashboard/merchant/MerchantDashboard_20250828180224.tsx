// src/pages/dashboard/MerchantDashboard.tsx

import { Dashboard, Notifications, People } from "@mui/icons-material"
import { Typography, Paper, Button, TextField, List, ListItem } from "@mui/material"

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
      <Typography variant="h5" gutterBottom>
        Approve Purchases
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Button variant="contained">Approve Request</Button>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Lookup Customer
      </Typography>
      <TextField label="Search Customer" fullWidth sx={{ mb: 3 }} />

      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <Paper>
        <List>
          {notifications.map((n, i) => (
            <ListItem key={i}>{n}</ListItem>
          ))}
        </List>
      </Paper>
    </DashboardLayout>
  )
}
