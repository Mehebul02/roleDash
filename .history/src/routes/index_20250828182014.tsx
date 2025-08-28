import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import { AdminLogin } from "../pages/auth/AdminLogin";
import { MerchantLogin } from "../pages/auth/Merchant";
import { MemberLogin } from "../pages/auth/MemberLogin ";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import UserDashboard from "../pages/dashboard/admin/UsersPage";
import OverviewDashboard from "../pages/dashboard/admin/Overview";
import MerchantsPage from "../pages/dashboard/admin/Merchants";
import MemberDashboard from "../pages/dashboard/member/MemberDashboard";


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
                path: "/dashboard/admin",
                element: <AdminDashboard />,
                children: [
                    {
                        index: true,
                        element: <OverviewDashboard />
                    },
                    { path: "/dashboard/admin/users", element: <UserDashboard /> },
                     {
                        path: "/dashboard/admin/merchants",
                        element: <MerchantsPage/>
                     }

                ],
            },
            {
                path: "/dashboard/",
                element: <MemberDashboard />,
                // children: [
                //     {
                //         index: true,
                //         element: <OverviewDashboard />
                //     },
                // ],
            }

        ]
    }
])


export default router