import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        children:[
            {
                path
            }
        ]
    }
])


export default router