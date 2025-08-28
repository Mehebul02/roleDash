// src/pages/dashboard/AdminDashboard.tsx

import { Dashboard, People, Store } from "@mui/icons-material"
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

const dummyUsers = [
  { id: 1, name: "John Doe", role: "Merchant" },
  { id: 2, name: "Jane Smith", role: "Member" },
]

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
      <Typography variant="h5" gutterBottom>
        Manage Users
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </DashboardLayout>
  )
}
