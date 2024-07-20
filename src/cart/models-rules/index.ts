import { Cart, CartItem } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Cart): number {
  return cart
    ? cart.items.reduce((acc: number, { product, count }: CartItem) => {
        return (acc += (product?.price || 0) * count);
      }, 0)
    : 0;
}
