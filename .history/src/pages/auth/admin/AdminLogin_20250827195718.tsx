import { AdminPanelSettings } from "@mui/icons-material"
import Login from "../../../components/Login"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess } from "../../../redux/features/auth/authSlice"

export const AdminLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleLogin = async (email: string, password: string) => {
  // Basic validation
  if (!email || !password) {
    throw new Error("Please fill in all fields")
  }

  // Check for valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("Please enter a valid email address")
  }

  // Fake authentication
  if (email === "admin@gmail.com" && password === "admin123") {
    dispatch(
      loginSuccess({
        token: "admin-token",
        role: "admin",
        user: { email },
      })
    )
    navigate("/dashboard/admin")
  } else {
    throw new Error("Invalid email or password")
  }
}


  return (
    <Login
      title="Admin Portal"
      subtitle="Administrator Access"
      description="Secure access to system administration"
      primaryColor="#FACECE"
      onLogin={handleLogin}
      icon={<AdminPanelSettings sx={{ fontSize: 40 }} />}
      showForgotPassword
      onForgotPassword={() => alert("Reset password flow")}
    />
  )
}

// export const UserLoginExample = () => {
//   const handleLogin = async (email: string, password: string) => {
//     // Your user authentication logic
//     console.log("User login attempt:", { email })
//   }

//   return (
//     <ReusableLogin
//       title="Welcome"
//       subtitle="Sign In"
//       description="Access your personal dashboard"
//       primaryColor="#4CAF50"
//       onLogin={handleLogin}
//       icon={<Person sx={{ fontSize: 40 }} />}
//       maxWidth="xs"
//     />
//   )
// }

// export const BusinessLoginExample = () => {
//   const handleLogin = async (email: string, password: string) => {
//     // Your business authentication logic
//     console.log("Business login attempt:", { email })
//   }

//   return (
//     <ReusableLogin
//       title="Business Hub"
//       subtitle="Business Portal"
//       description="Manage your business operations"
//       primaryColor="#2196F3"
//       onLogin={handleLogin}
//       icon={<Business sx={{ fontSize: 40 }} />}
//       backgroundGradient="linear-gradient(135deg, #2196F3 0%, #1976D2 100%)"
//       showForgotPassword={false}
//       footerText="Enterprise security and compliance"
//     />
//   )
// }

// export const CustomStyledLoginExample = () => {
//   const handleLogin = async (email: string, password: string) => {
//     // Your custom authentication logic
//     console.log("Custom login attempt:", { email })
//   }

//   return (
//     <ReusableLogin
//       title="Secure Access"
//       subtitle="Authentication Required"
//       description="Please verify your identity"
//       primaryColor="#9C27B0"
//       onLogin={handleLogin}
//       icon={<Security sx={{ fontSize: 40 }} />}
//       backgroundGradient="linear-gradient(135deg, #9C27B0 0%, #673AB7 50%, #3F51B5 100%)"
//       maxWidth="md"
//       footerText="Multi-factor authentication enabled"
//     />
//   )
// }
