import { CartItemEntity } from '../entity/cart-item.entity';

/**
 * @param {CartItemEntity[]} items
 * @returns {number}
 */
export function calculateCartTotal(items: CartItemEntity[]): number {
  return items ? items.reduce((acc: number, { product, count }: CartItemEntity) => {
    return acc += product.price * count;
  }, 0) : 0;
}
