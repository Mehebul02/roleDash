"use client"

import React from "react"
import { Box, Card, CardContent, Typography, Avatar, Divider, Container } from "@mui/material"
import LoginForm from "./LoginForm"
import { Security } from "@mui/icons-material"

interface LoginLayoutProps {
  title?: string
  subtitle?: string
  description?: string
  primaryColor?: string
  icon?: React.ReactNode
  backgroundGradient?: string
  footerText?: string
}

const LoginLayout: React.FC<LoginLayoutProps> = ({
  title = "Admin Portal",
  subtitle = "Welcome Back",
  description = "Enter your credentials to access the dashboard",
  primaryColor = "#FACECE",
  icon = <Security sx={{ fontSize: 40 }} />,
  backgroundGradient,
  footerText = "Protected by enterprise-grade security",
}) => {
  const defaultGradient = backgroundGradient || `linear-gradient(135deg, ${primaryColor} 0%, #f5f5f5 100%)`

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: defaultGradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "primary.main",
              mx: "auto",
              mb: 2,
              boxShadow: `0 4px 20px ${primaryColor}40`,
            }}
          >
            {icon}
          </Avatar>
          <Typography variant="h4" sx={{ color: "white", mb: 1, fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)" }}>
            {description}
          </Typography>
        </Box>

        <Card sx={{ maxWidth: 400, mx: "auto", borderRadius: 3, overflow: "visible" }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                {subtitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Render the login form */}
            <LoginForm primaryColor={primaryColor} />
          </CardContent>
        </Card>

        {footerText && (
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
              {footerText}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default LoginLayout
