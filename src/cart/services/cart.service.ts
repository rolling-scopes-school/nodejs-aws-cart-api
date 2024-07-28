import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Cart, CartStatuses } from '../models';
import { PutCartPayload } from 'src/order/type';
import { CartRepository } from './cart.repository';

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  findByUserId(userId: string): Promise<Cart> {
    if (userId) {
      return this.cartRepository.findByUserId(userId);
    }

    return undefined;
  }

  async createByUserId(user_id: string): Promise<Cart> {
    const timestamp = Date.now();

    const userCart = {
      id: randomUUID() as string,
      user_id,
      created_at: timestamp,
      updated_at: timestamp,
      status: CartStatuses.OPEN,
      items: [],
    };

    await this.cartRepository.create(userCart);

    return userCart;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, payload: PutCartPayload): Promise<Cart> {
    const userCart = await this.findOrCreateByUserId(userId);

    const index = userCart.items.findIndex(
      ({ product }) => product.id === payload.product.id,
    );

    if (index === -1) {
      await this.cartRepository.addCartItem(userCart.id, payload);
    } else if (payload.count === 0) {
      await this.cartRepository.removeCartItem(userCart.id, payload);
    } else {
      await this.cartRepository.updateCount(userCart.id, payload);
    }

    return userCart;
  }

  updateCartStatus(userId: string): Promise<void> {
    return this.cartRepository.updateCartStatus(userId);
  }

  removeByUserId(userId: string): Promise<void> {
    return this.cartRepository.removeCart(userId);
  }
}
