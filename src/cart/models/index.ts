export enum CartStatuses {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

export enum DynamoDBTable {
  product = 'product',
}

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export type CartItem = {
  product: Product;
  count: number;
};

export type Cart = {
  id: string;
  user_id: string;
  created_at: number;
  updated_at: number;
  status: CartStatuses;
  items: CartItem[];
};

export type FindCartByIdPGRes = Array<{
  id: string;
  user_id: string;
  created_at: number;
  updated_at: number;
  status: CartStatuses;
  product_id: string;
  count: number;
}>;

export type Items = {
  items: Array<{
    product_id: string;
    count: number;
  }>;
};

export type PreCart = Omit<Cart, 'items'> & Items;
