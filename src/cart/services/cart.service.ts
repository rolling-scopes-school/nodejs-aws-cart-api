import { Injectable } from '@nestjs/common';

import { Cart } from '../models';
import { InjectKnex } from 'nestjs-knex';
import { Knex } from 'knex';

@Injectable()
export class CartService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findByUserId(userId: string): Promise<Cart> {
    const [cart] = await this.knex('carts').where({ user_id: userId }).first();
    if (cart) {
      cart.items = await this.knex('cart_items').where({ cart_id: cart.id });
    }
    return cart;
  }

  async createByUserId(userId: string): Promise<Cart> {
    const [id] = await this.knex('carts')
      .insert({ user_id: userId })
      .returning('id');
    return {
      id,
      items: [],
    };
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    let userCart = await this.findByUserId(userId);
    if (!userCart) {
      userCart = await this.createByUserId(userId);
    }

    return userCart;
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);

    await this.knex('cart_items').where({ cart_id: cart.id }).del();
    for (const item of items) {
      await this.knex('cart_items').insert({
        cart_id: cart.id,
        product_id: item.product.id,
        count: item.count,
      });
    }
    cart.items = items;
    return cart;
  }

  async removeByUserId(userId: string): Promise<void> {
    const cart = await this.findByUserId(userId);

    if (!cart) {
      return;
    }

    await this.knex('cart_items').where({ cart_id: cart.id }).del();
    await this.knex('carts').where({ id: cart.id }).del();
  }
}
