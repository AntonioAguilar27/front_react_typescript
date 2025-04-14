import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Products from './views/Products'
import NewProduct, {action as NewProductAction} from "./views/NewProduct";
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: NewProductAction
            }
        ]
    }
])