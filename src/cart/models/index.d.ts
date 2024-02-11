declare enum CartStatuses {
    OPEN = "OPEN",
    STATUS = "ORDERED"
}
export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
};
export type CartItem = {
    product_id: number;
    cart_id: number;
    product: Product;
    count: number;
};
export type Cart = {
    id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    status: CartStatuses;
    items: CartItem[];
};
export {};
