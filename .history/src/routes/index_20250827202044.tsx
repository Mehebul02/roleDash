import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import { AdminLogin } from "../pages/auth/AdminLogin";


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
                element: <AdminLogin />
            }
        ]
    }
])


export default router