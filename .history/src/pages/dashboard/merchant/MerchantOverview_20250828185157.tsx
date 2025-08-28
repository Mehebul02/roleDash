"use client"
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material"

import { useState } from "react"
import Approve_Purchases from "./Approve_Purchases"
import Customers from "./Customers"

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

const dummyPurchases = [
  { id: 1, customer: "John Doe", item: "Product A", amount: "$120", status: "Pending" },
  { id: 2, customer: "Jane Smith", item: "Product B", amount: "$75", status: "Pending" },
  { id: 3, customer: "David Lee", item: "Product C", amount: "$200", status: "Pending" },
]

const dummyNotifications = [
  "Approval request for Product A from John Doe",
  "Approval request for Product B from Jane Smith",
  "Approval request for Product C from David Lee",
]

export default function MerchantOverview() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contributionRate, setContributionRate] = useState(5) 

  const filteredCustomers = dummyPurchases.filter((p) =>
    p.customer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", p: 3, bgcolor: "background.default" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
          Welcome to Merchant Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Approve Purchases Table */}
          <Approve_Purchases dummyPurchases={dummyPurchases}/>

          {/* Lookup Customer */}
         <Customers searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />

          {/* Set Contribution Rate */}
          <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Set Contribution Rate
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <TextField
                    type="number"
                    value={contributionRate}
                    onChange={(e) => setContributionRate(Number(e.target.value))}
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    sx={{ width: 120 }}
                  />
                  <Button variant="contained" color="secondary">
                    Update
                  </Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Current contribution rate: {contributionRate}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Notifications */}
          <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Notifications
                </Typography>
                <List>
                  {dummyNotifications.map((note, idx) => (
                    <Box key={idx}>
                      <ListItem>
                        <ListItemText primary={note} />
                      </ListItem>
                      {idx < dummyNotifications.length - 1 && <Divider />}
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
