import { Storefront } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess } from "../../redux/features/auth/authSlice"
import LoginLayout from "../../components/LoginLayout"


export const MerchantLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (storeName: string, password: string) => {
    // Basic validation
    if (!storeName || !password) throw new Error("Please fill in all fields")

    // Fake authentication
    if (storeName === "my-store" && password === "merchant123") {
      dispatch(
        loginSuccess({
          token: "merchant-token",
          role: "merchant",
          user: { storeName },
        })
      )
      navigate("/dashboard/merchant")
    } else {
      throw new Error("Invalid store name or password")
    }
  }

  return (
    <LoginLayout
      title="Merchant Portal"
      subtitle="Store Access"
      description="Login to manage your store"
      primaryColor="#FACECE"
      icon={<Storefront sx={{ fontSize: 40 }} />}
      showForgotPassword
      onForgotPassword={() => alert("Reset password flow")}
      onLogin={handleLogin}
    />
  )
}
