// src/pages/dashboard/admin/AdminDashboard.tsx
import DashboardLayout from "../../../components/DashboardLayout";
import { Dashboard, People, Store } from "@mui/icons-material";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 7000 },
];

const stats = [
  { title: "Total Users", value: "1,245" },
  { title: "Revenue", value: "$54,320" },
  { title: "Orders", value: "320" },
  { title: "Growth", value: "+12%" },
];

const recentUsers = [
  { id: 1, name: "John Doe", role: "Merchant", date: "2025-08-25" },
  { id: 2, name: "Sarah Smith", role: "Member", date: "2025-08-24" },
  { id: 3, name: "David Lee", role: "Admin", date: "2025-08-22" },
];

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
      <Box p={3}>
        {/* Stats Cards */}
        <Grid container spacing={3} mb={3}>
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{stat.title}</Typography>
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Monthly Revenue Chart */}
        <Card sx={{ mb: 3, p: 2, boxShadow: 3 }}>
          <Typography variant="h6" gutterBottom>
            Monthly Revenue
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#1976d2" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Recent Users Table */}
        <Card sx={{ p: 2, boxShadow: 3 }}>
          <Typography variant="h6" gutterBottom>
            Recent Users
          </Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Date Joined</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Card>
      </Box>
    </DashboardLayout>
  );
}
