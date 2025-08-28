import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import { AdminLogin } from "../pages/auth/AdminLogin";
import { MerchantLogin } from "../pages/auth/Merchant";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        children: [
            {
                path: "/login/admin",
                element: <AdminLogin />
            },
            {
                path: "/login/merchant",
                element: <MerchantLogin />
            },
        ]
    }
])


export default router