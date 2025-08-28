import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 30, transactions: 50 },
  { name: "Tue", users: 40, transactions: 60 },
  { name: "Wed", users: 35, transactions: 45 },
  { name: "Thu", users: 50, transactions: 80 },
  { name: "Fri", users: 60, transactions: 70 },
  { name: "Sat", users: 45, transactions: 55 },
  { name: "Sun", users: 70, transactions: 90 },
];

export default function DashboardOverview() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {/* Stats Cards */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">1,245</p>
          <p className="text-sm text-gray-500">+50 today</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">Active Users</h2>
          <p className="text-3xl font-bold mt-2">876</p>
          <p className="text-sm text-gray-500">Last 24h</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <p className="text-3xl font-bold mt-2">5,430</p>
          <p className="text-sm text-gray-500">This week</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">Pending Requests</h2>
          <p className="text-3xl font-bold mt-2">32</p>
          <p className="text-sm text-gray-500">Action Required</p>
        </CardContent>
      </Card>

      {/* Chart Section */}
      <div className="col-span-1 md:col-span-2 xl:col-span-4 bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            <Bar dataKey="transactions" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
