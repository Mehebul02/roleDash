"use client"

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Divider,
  Button,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Logout,
} from "@mui/icons-material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../redux/features/auth/authSlice"
import { useNavigate, Outlet } from "react-router-dom"
import OverviewDashboard from "../pages/dashboard/admin/Overview"

interface DashboardLayoutProps {
  title: string
  menuItems: { label: string; icon: React.ReactNode; path: string }[]
}

const drawerWidth = 240

export default function DashboardLayout({ title, menuItems }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login/admin") // role অনুযায়ী change করতে পারো
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#FACECE",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpen(!open)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit" startIcon={<Logout />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          background: "#fafafa",
          minHeight: "100vh",
        }}
      >
       
        <OverviewDashboard/>
        <Outlet />
      </Box>
    </Box>
  )
}
