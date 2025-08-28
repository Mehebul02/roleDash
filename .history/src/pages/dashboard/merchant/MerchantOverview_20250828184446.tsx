"use client"
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
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { Search,  } from "lucide-react"
import { useState } from "react"

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
  const [contributionRate, setContributionRate] = useState(5) // default 5%

  const filteredCustomers = dummyPurchases.filter((p) =>
    p.customer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", p: 3, bgcolor: "background.default" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
          Merchant Dashboard Actions
        </Typography>

        <Grid container spacing={3}>
          {/* Approve Purchases Table */}
          <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Approve Purchases
                </Typography>
                <Paper sx={{ overflow: "hidden" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dummyPurchases.map((purchase) => (
                        <TableRow key={purchase.id}>
                          <TableCell>{purchase.id}</TableCell>
                          <TableCell>{purchase.customer}</TableCell>
                          <TableCell>{purchase.item}</TableCell>
                          <TableCell>{purchase.amount}</TableCell>
                          <TableCell>{purchase.status}</TableCell>
                          <TableCell>
                            <Button variant="contained" color="primary" size="small">
                              Approve
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </CardContent>
            </Card>
          </Grid>

          {/* Lookup Customer */}
          <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Lookup Customer
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Search customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{ startAdornment: <Search size={18} /> }}
                  sx={{ mb: 2 }}
                />
                <Paper sx={{ maxHeight: 250, overflow: "auto" }}>
                  <List>
                    {filteredCustomers.length > 0 ? (
                      filteredCustomers.map((customer) => (
                        <ListItem key={customer.id}>
                          <ListItemText
                            primary={customer.customer}
                            secondary={`${customer.item} - ${customer.amount}`}
                          />
                        </ListItem>
                      ))
                    ) : (
                      <ListItem>
                        <ListItemText primary="No results found" />
                      </ListItem>
                    )}
                  </List>
                </Paper>
              </CardContent>
            </Card>
          </Grid>

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
