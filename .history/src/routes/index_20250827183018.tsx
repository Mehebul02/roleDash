import { createBrowserRouter } from "react-router-dom";
import type Roots from "../layout/Roots";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
    }
])


export default router