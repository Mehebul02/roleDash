import { createBrowserRouter } from "react-router-dom";
import Root from "../mainlayout/Root";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";
import EditProduct from "../pages/products/EditProduct";
import ComingSoon from "../components/ComingSoon";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path:"/product/:id",
                element:<EditProduct/>
            },{
                path:'/contact',
                element:<ComingSoon/>
            },
            {
                path:'/categories',
                element:<ComingSoon/>
            },

        ]

    }
])


export default router