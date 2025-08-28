"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const usersData: User[] = [
  { id: "1", name: "Mehebul Alif", email: "alif@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: "3", name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
];

const UserDashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, user: User) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleAction = (action: string) => {
    if (selectedUser) {
      alert(`${action} user: ${selectedUser.name}`);
    }
    handleMenuClose();
  };

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, bgcolor: "#fff", borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        👤 User Management
      </Typography>

      {/* Search Input */}
      <TextField
        label="Search by name or email"
        variant="outlined"
        size="small"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ mb: 3, maxWidth: 300 }}
      />

      {/* User Table */}
     <

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleAction("Edit")}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={() => handleAction("Delete")}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Delete
        </MenuItem>
        <MenuItem onClick={() => handleAction("Change Role")}>
          <SwapHorizIcon fontSize="small" sx={{ mr: 1 }} /> Change Role
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserDashboard;
