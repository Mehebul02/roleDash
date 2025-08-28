import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import { AdminLogin } from "../pages/auth/AdminLogin";
import { MerchantLogin } from "../pages/auth/Merchant";
import { MemberLogin } from "../pages/auth/MemberLogin ";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import UserDashboard from "../pages/dashboard/admin/UsersPage";


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
            {
                path: "/login/member",
                element: <MemberLogin />
            },
            {
                path: "/dashboard/",
                element: <AdminDashboard />,
                children:[
                  
                    {
                path:"/dashboard/admin/users",
                element:<UserDashboard/>,
            }
                ]
            },
            
        ]
    }
])


export default router