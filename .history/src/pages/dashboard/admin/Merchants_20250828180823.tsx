"use client"
import {
  Box,
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
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { Edit, Delete, Search } from "@mui/icons-material"

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

const merchants = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", status: "Active" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", phone: "0987654321", status: "Inactive" },
  { id: 3, name: "David Lee", email: "david@example.com", phone: "1122334455", status: "Active" },
]

export default function MerchantsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", p: 3, bgcolor: "background.default" }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
            Merchants
          </Typography>
          <Typography variant="body1" color="text.secondary">
            List of all merchants registered in the system.
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 3, maxWidth: 400 }}>
          <TextField
            fullWidth
            placeholder="Search merchants..."
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Merchants Table */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Paper sx={{ overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.50" }}>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Phone</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {merchants.map((merchant, index) => (
                    <TableRow
                      key={merchant.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.50" },
                        bgcolor: index % 2 === 0 ? "background.paper" : "grey.25",
                      }}
                    >
                      <TableCell sx={{ color: "text.primary" }}>#{merchant.id}</TableCell>
                      <TableCell sx={{ color: "text.primary" }}>{merchant.name}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{merchant.email}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{merchant.phone}</TableCell>
                      <TableCell>
                        <Chip
                          label={merchant.status}
                          size="small"
                          color={merchant.status === "Active" ? "secondary" : "default"}
                          variant={merchant.status === "Inactive" ? "outlined" : "filled"}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" size="small">
                          <Edit />
                        </IconButton>
                        <IconButton color="secondary" size="small">
                          <Delete />
                        </IconButton>
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
