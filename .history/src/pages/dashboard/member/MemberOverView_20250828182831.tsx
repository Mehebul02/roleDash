"use client"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { ShoppingCart, CreditCard, Calendar, TrendingUp } from "lucide-react"

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#FF6F61" },
    background: { default: "#FAFAFA", paper: "#FFFFFF" },
    text: { primary: "#374151", secondary: "#6B7280" },
  },
  typography: { fontFamily: "var(--font-geist-sans), system-ui, sans-serif" },
  shape: { borderRadius: 12 },
})

const stats = [
  { title: "Total Orders", value: "45", icon: ShoppingCart, change: "+5%" },
  { title: "Active Subscriptions", value: "3", icon: CreditCard, change: "0%" },
  { title: "Last Login", value: "2025-08-27", icon: Calendar, change: "-" },
  { title: "Growth", value: "+12%", icon: TrendingUp, change: "+2%" },
]

const recentActivities = [
  { id: 1, activity: "Order #1234 Completed", date: "2025-08-26", status: "Completed" },
  { id: 2, activity: "Order #1235 Pending", date: "2025-08-25", status: "Pending" },
  { id: 3, activity: "Subscription Renewal", date: "2025-08-24", status: "Completed" },
  { id: 4, activity: "Order #1236 Cancelled", date: "2025-08-23", status: "Cancelled" },
]

export default function MemberOverView() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", p: 3, bgcolor: "background.default" }}>
        {/* Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
            Member Overview
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back! Here's your recent activity and stats.
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} mb={4}>
          {stats.map((stat, ) => {
            const Icon = stat.icon
            return (
              <Grid >
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {stat.title}
                      </Typography>
                      <Avatar sx={{ bgcolor: "primary.light", width: 40, height: 40 }}>
                        <Icon size={20} color="#1976d2" />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="secondary.main">
                      {stat.change} from last period
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* Recent Activities Table */}
        
      </Box>
    </ThemeProvider>
  )
}
