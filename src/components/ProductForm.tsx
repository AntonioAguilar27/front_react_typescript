import { Product } from "../types"


type ProductFormProps = {
    product?: Product
}

export default function ProductForm({product} : ProductFormProps) {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre Producto:</label>
                <input
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-200 rounded-md"
                    placeholder="Nombre del Producto"
                    name="name"
                    defaultValue={product?.name}

                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="price"
                    type="number"
                    className="mt-2 block w-full p-3 bg-slate-200 rounded-md"
                    placeholder="Precio Producto. ej. 200, 300"
                    name="price"
                    defaultValue={product?.price}

                />
            </div>
        </>
    )
}