"use client"

import React from "react"
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
  Chip,
  Avatar,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

const theme = createTheme({
  palette: {
    primary: {
      main: "#FACECE", // Soft pink/peach
      light: "#FDE2E4",
      dark: "#F7A8B8",
    },
    secondary: {
      main: "#FF6F61", // Coral
      light: "#FF8A80",
      dark: "#E64A19",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#374151",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          },
        },
      },
    },
  },
})

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 7000 },
]

const stats = [
  { title: "Total Users", value: "1,245", icon: Users, change: "+12%" },
  { title: "Revenue", value: "$54,320", icon: DollarSign, change: "+8%" },
  { title: "Orders", value: "320", icon: ShoppingCart, change: "+15%" },
  { title: "Growth", value: "+12%", icon: TrendingUp, change: "+3%" },
]

const recentUsers = [
  { id: 1, name: "John Doe", role: "Merchant", date: "2025-08-25", status: "Active" },
  { id: 2, name: "Sarah Smith", role: "Member", date: "2025-08-24", status: "Active" },
  { id: 3, name: "David Lee", role: "Admin", date: "2025-08-22", status: "Pending" },
  { id: 4, name: "Emma Wilson", role: "Member", date: "2025-08-21", status: "Active" },
  { id: 5, name: "Michael Brown", role: "Merchant", date: "2025-08-20", status: "Inactive" },
]

export default function OverviewDashboard() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 3 }}>
        {/* Dashboard Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
            Dashboard Overview
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.125rem" }}>
            Welcome back! Here's what's happening with your business today.
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} mb={4} component={}>
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {stat.title}
                      </Typography>
                      <Avatar sx={{ bgcolor: "primary.light", width: 40, height: 40 }}>
                        <Icon size={20} color={theme.palette.primary.dark} />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="body2" color="secondary.main" fontWeight={600}>
                        {stat.change}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        from last month
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* Monthly Revenue Chart */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="text.primary">
              Monthly Revenue
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Revenue trends over the past 6 months
            </Typography>
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: theme.shape.borderRadius,
                      color: theme.palette.text.primary,
                    }}
                  />
                  <Bar dataKey="revenue" fill={theme.palette.primary.main} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>

        {/* Recent Users Table */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="text.primary">
              Recent Users
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Latest user registrations and activity
            </Typography>
            <Paper sx={{ overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.50" }}>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>User ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Role</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Date Joined</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentUsers.map((user, index) => (
                    <TableRow
                      key={user.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.50" },
                        bgcolor: index % 2 === 0 ? "background.paper" : "grey.25",
                      }}
                    >
                      <TableCell sx={{ fontWeight: 600, color: "text.primary" }}>#{user.id}</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "text.primary" }}>{user.name}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{user.role}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{user.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={user.status}
                          size="small"
                          color={
                            user.status === "Active"
                              ? "secondary"
                              : user.status === "Pending"
                              ? "primary"
                              : "default"
                          }
                          variant={user.status === "Inactive" ? "outlined" : "filled"}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  )
}
