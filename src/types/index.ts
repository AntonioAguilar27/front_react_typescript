import { object, string, number, boolean, array, InferOutput } from 'valibot'


export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object ({
    id: number(),
    name: string(),
    price: number(),
    aviability: boolean()
})

export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput<typeof ProductSchema>

