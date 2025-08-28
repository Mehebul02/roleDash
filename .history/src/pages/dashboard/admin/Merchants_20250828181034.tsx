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
       <M
      </Box>
    </ThemeProvider>
  )
}
