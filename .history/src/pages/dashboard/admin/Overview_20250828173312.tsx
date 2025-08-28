"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

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
    <div className="min-h-screen bg-background p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground text-balance">Dashboard Overview</h1>
        <p className="text-muted-foreground text-lg">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card
              key={i}
              className="relative overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="flex items-center text-sm">
                  <span className="text-secondary font-medium">{stat.change}</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Chart Section */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">Monthly Revenue</CardTitle>
          <p className="text-muted-foreground">Revenue trends over the past 6 months</p>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="hsl(var(--primary))"
                  radius={[6, 6, 0, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Users Table */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">Recent Users</CardTitle>
          <p className="text-muted-foreground">Latest user registrations and activity</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">User ID</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Role</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Date Joined</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b border-border/50 hover:bg-muted/50 transition-colors ${
                      index % 2 === 0 ? "bg-card" : "bg-muted/20"
                    }`}
                  >
                    <td className="py-4 px-2 text-sm text-foreground font-medium">#{user.id}</td>
                    <td className="py-4 px-2 text-sm text-foreground font-medium">{user.name}</td>
                    <td className="py-4 px-2 text-sm text-muted-foreground">{user.role}</td>
                    <td className="py-4 px-2 text-sm text-muted-foreground">{user.date}</td>
                    <td className="py-4 px-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-secondary/10 text-secondary"
                            : user.status === "Pending"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
