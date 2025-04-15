import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Products, {loader as productsLoader, action as updateAviabilityAction} from './views/Products'
import NewProduct, {action as NewProductAction} from "./views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                hydrateFallbackElement: <p>Cargando...</p>,
                action: updateAviabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: NewProductAction,
                hydrateFallbackElement: <p>Cargando...</p>,
            },
            {
                path: 'productos/:id/editar', // ROA pattern - resource-oriented design
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction,
                hydrateFallbackElement: <p>Cargando...</p>,
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }   
        ]
    }
])