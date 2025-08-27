import { createBrowserRouter } from "react-router-dom";


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