import { object, string, number, boolean, array } from "valibot";
import type { Infer } from "valibot";

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

export type Product = Infer<typeof ProductSchema>;
