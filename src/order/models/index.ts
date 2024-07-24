import { CartItem, CartStatuses } from '../../cart/models';

export type Order = {
  id?: string;
  userId: string;
  cartId: string;
  // items: CartItem[]
  payment: {
    type: string;
    // address?: string;
    // creditCard?: string;
  };
  delivery: {
    type: string;
    address: string;
  };
  comments: string;
  status: CartStatuses;
  total: number;
};
