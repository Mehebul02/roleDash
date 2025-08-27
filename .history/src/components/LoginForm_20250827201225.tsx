"use client"

import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
  Link,
} from "@mui/material"
import { Visibility, VisibilityOff, Email, Lock, ErrorOutline } from "@mui/icons-material"

interface LoginFormProps {
  primaryColor?: string
  showForgotPassword?: boolean
  onLogin?: (email: string, password: string) => Promise<void> | void
  onForgotPassword?: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({
  primaryColor = "#FACECE",
  showForgotPassword = true,
  onLogin,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const adjustColor = (color: string, amount: number) => {
    const usePound = color[0] === "#"
    const col = usePound ? color.slice(1) : color
    const num = parseInt(col, 16)
    let r = (num >> 16) + amount
    let g = ((num >> 8) & 0x00ff) + amount
    let b = (num & 0x0000ff) + amount
    r = Math.min(255, Math.max(0, r))
    g = Math.min(255, Math.max(0, g))
    b = Math.min(255, Math.max(0, b))
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
        setTimeout(() => setIsLoading(false), 1000)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = () => {
    if (onForgotPassword) onForgotPassword()
  }

  return (
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
        placeholder="Enter your email"
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
          color: "#000000"
          background: `linear-gradient(45deg, ${primaryColor} 30%, ${adjustColor(primaryColor, 10)} 90%)`,
          "&:hover": {
            background: `linear-gradient(45deg, ${adjustColor(primaryColor, -20)} 30%, ${primaryColor} 90%)`,
          },
        }}
      >
        {isLoading ? <CircularProgress size={20} color="inherit" /> : "Sign In"}
      </Button>

      {showForgotPassword && (
        <Box sx={{ textAlign: "center", color: "#171717" }}>
          <Link
            component="button"
            type="button"
            variant="body2"
            onClick={handleForgotPassword}
            sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            Forgot your password?
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default LoginForm
