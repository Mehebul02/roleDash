"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
  InputAdornment,
  CircularProgress,
  Container,
  Avatar,
  Link,
  Divider,
} from "@mui/material"
import { Visibility, VisibilityOff, Security, Email, Lock, ErrorOutline } from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

interface LoginFormProps {
  title?: string
  subtitle?: string
  description?: string
  primaryColor?: string
  onLogin?: (email: string, password: string) => Promise<void> | void
  showForgotPassword?: boolean
  onForgotPassword?: () => void
  icon?: React.ReactNode
  backgroundGradient?: string
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl"
  footerText?: string
}

const Login: React.FC<LoginFormProps> = ({
  title = "Admin Portal",
  subtitle = "Welcome Back",
  description = "Enter your credentials to access the dashboard",
  primaryColor = "#FACECE",
  onLogin,
  showForgotPassword = true,
  onForgotPassword,
  icon = <Security sx={{ fontSize: 40 }} />,
  backgroundGradient,
  maxWidth = "sm",
  footerText = "Protected by enterprise-grade security",
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
        dark: adjustColor(primaryColor, -20),
        light: adjustColor(primaryColor, 20),
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
      text: {
        primary: "#212121",
        secondary: "#757575",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h4: {
        fontWeight: 600,
        fontSize: "1.75rem",
      },
      h6: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
            padding: "12px 24px",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
            },
          },
        },
      },
    },
  })

  function adjustColor(color: string, amount: number): string {
    const usePound = color[0] === "#"
    const col = usePound ? color.slice(1) : color
    const num = Number.parseInt(col, 16)
    let r = (num >> 16) + amount
    let g = ((num >> 8) & 0x00ff) + amount
    let b = (num & 0x0000ff) + amount
    r = r > 255 ? 255 : r < 0 ? 0 : r
    g = g > 255 ? 255 : g < 0 ? 0 : g
    b = b > 255 ? 255 : b < 0 ? 0 : b
    return (usePound ? "#" : "") + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      if (onLogin) {
        await onLogin(email, password)
      } else {
        // Default behavior - simulate API call
        setTimeout(() => {
          console.log("Login successful")
          setIsLoading(false)
        }, 1000)
        return
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword()
    } else {
      console.log("Forgot password clicked")
    }
  }

  const defaultGradient = `linear-gradient(135deg, ${primaryColor} 0%, ${adjustColor(primaryColor, -15)} 100%)`

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: backgroundGradient || defaultGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Container maxWidth={maxWidth}>
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
            <Typography variant="h4" component="h1" sx={{ color: "white", mb: 1, fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Secure access to administrative dashboard
            </Typography>
          </Box>

          <Card
            sx={{
              maxWidth: 400,
              mx: "auto",
              borderRadius: 3,
              overflow: "visible",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 600 }}>
                  {subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}>
                {error && (
                  <Alert severity="error" icon={<ErrorOutline />} sx={{ mb: 2, borderRadius: 2 }}>
                    {error}
                  </Alert>
                )}

                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@company.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                  required
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                  required
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                  sx={{
                    mb: 2,
                    py: 1.5,
                    background: `linear-gradient(45deg, ${primaryColor} 30%, ${adjustColor(primaryColor, 10)} 90%)`,
                    boxShadow: `0 4px 20px ${primaryColor}30`,
                    "&:hover": {
                      background: `linear-gradient(45deg, ${adjustColor(primaryColor, -20)} 30%, ${primaryColor} 90%)`,
                      boxShadow: `0 6px 25px ${primaryColor}40`,
                    },
                  }}
                >
                  {isLoading ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CircularProgress size={20} color="inherit" />
                      Signing In...
                    </Box>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {showForgotPassword && (
                  <Box sx={{ textAlign: "center" }}>
                    <Link
                      component="button"
                      type="button"
                      variant="body2"
                      onClick={handleForgotPassword}
                      sx={{
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Forgot your password?
                    </Link>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>

          {footerText && (
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="caption" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {footerText}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Login
