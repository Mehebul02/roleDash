// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom"

interface ProtectedRouteProps {
  isAuthenticated: boolean
  redirectPath?: string
}

export default function ProtectedRoute({
  isAuthenticated,
  redirectPath = "/login/merchant",
}: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
