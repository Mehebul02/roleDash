import { Person } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess } from "../../redux/features/auth/authSlice"
import LoginLayout from "../../components/LoginLayout"

export const MemberLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (identifier: string, password: string) => {
    if (!identifier || !password) throw new Error("Please fill in all fields")

    // Fake Member Authentication
    // You can adjust the logic to simulate OTP later
    const isPhone = /^\d{10,15}$/.test(identifier) // simple phone number check
    const isEmail = identifier.includes("@")

    if ((isPhone || isEmail) && password === "member123") {
      dispatch(
        loginSuccess({
          token: "member-token",
          role: "member",
          user: { identifier },
        })
      )
      navigate("/dashboard/member")
    } else {
      throw new Error("Invalid phone/email or password")
    }
  }

  const handleForgotPassword = () => {
    alert("Simulate OTP/Reset password flow here")
  }

  return (
    <LoginLayout
      title="Member Portal"
      subtitle="Login with Phone or Email"
      description="Access your account"
      primaryColor="#FACECE"
      icon={<Person sx={{ fontSize: 40 }} />}
      showForgotPassword
      onForgotPassword={handleForgotPassword}
      onLogin={handleLogin}
      identifierType="text" 
      identifierIcon={<Person color="action" />}
    />
  )
}
