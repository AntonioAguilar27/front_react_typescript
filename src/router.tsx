import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Products, {loader as productsLoader} from './views/Products'
import NewProduct, {action as NewProductAction} from "./views/NewProduct";
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: NewProductAction
            }
        ]
    }
])