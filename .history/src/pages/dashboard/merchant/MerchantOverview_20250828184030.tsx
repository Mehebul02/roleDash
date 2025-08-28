"use client"
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
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
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ShoppingCart, DollarSign, Package, TrendingUp } from "lucide-react"

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
  { title: "Total Orders", value: "120", icon: ShoppingCart, change: "+10%" },
  { title: "Revenue", value: "$32,450", icon: DollarSign, change: "+8%" },
  { title: "Active Products", value: "25", icon: Package, change: "+2" },
  { title: "Growth", value: "+15%", icon: TrendingUp, change: "+3%" },
]

const monthlyRevenue = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 7000 },
  { name: "Mar", revenue: 6000 },
  { name: "Apr", revenue: 8000 },
  { name: "May", revenue: 7500 },
  { name: "Jun", revenue: 9000 },
]

const recentOrders = [
  { id: 1, customer: "John Doe", amount: "$120", date: "2025-08-26", status: "Completed" },
  { id: 2, customer: "Jane Smith", amount: "$75", date: "2025-08-25", status: "Pending" },
  { id: 3, customer: "David Lee", amount: "$200", date: "2025-08-24", status: "Completed" },
  { id: 4, customer: "Emma Wilson", amount: "$50", date: "2025-08-23", status: "Cancelled" },
  { id: 5, customer: "Michael Brown", amount: "$180", date: "2025-08-22", status: "Completed" },
]

export default function MerchantOverview() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", p: 3, bgcolor: "background.default" }}>
        {/* Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
            Merchant Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back! Here's your business overview.
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
                      {stat.change} from last month
                    </Typography>
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
              Revenue trends over the last 6 months
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary }} />
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

        {/* Recent Orders Table */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="text.primary">
              Recent Orders
            </Typography>
            <Paper sx={{ overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.50" }}>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>#</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Customer</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentOrders.map((order, index) => (
                    <TableRow
                      key={order.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.50" },
                        bgcolor: index % 2 === 0 ? "background.paper" : "grey.25",
                      }}
                    >
                      <TableCell sx={{ color: "text.primary" }}>#{order.id}</TableCell>
                      <TableCell sx={{ color: "text.primary" }}>{order.customer}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{order.amount}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{order.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          size="small"
                          color={
                            order.status === "Completed"
                              ? "secondary"
                              : order.status === "Pending"
                              ? "primary"
                              : "default"
                          }
                          variant={order.status === "Cancelled" ? "outlined" : "filled"}
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
