import { CartEntity } from "./cart.entity";
import { ProductEntity } from "./product.entity";
export declare class CartItemEntity {
    id: string;
    cart: CartEntity;
    product_id: string;
    count: number;
    product: ProductEntity;
}
