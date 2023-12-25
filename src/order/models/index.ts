import { CartItem } from '../../cart/models';

export type Order = {
  id?: string,
  user_id: string;
  cart_id: string;
  payment: {
    type: string,
    address?: any,
    creditCard?: any,
  },
  delivery: {
    type: string,
    address: any,
  },
  comments: string,
  status: string;
  total: number;
}
