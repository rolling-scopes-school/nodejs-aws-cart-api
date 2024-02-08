import { Injectable } from '@nestjs/common';

import { Cart } from '../models';
import { InjectKnex } from 'nestjs-knex';
import { Knex } from 'knex';

@Injectable()
export class CartService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findByUserId(userId: string): Promise<Cart> {
    console.log('findByUserId userId', userId);
    try {
      const cart = await this.knex('carts').where({ user_id: userId }).first();
      if (cart) {
        cart.items = await this.knex('cart_items').where({ cart_id: cart.id });
        return cart;
      }
    } catch (e) {
      console.log('findByUserId Error: ', e);
    }
    return null;
  }

  async createByUserId(userId: string): Promise<Cart> {
    console.log('createByUserId userId', userId);
    try {
      const [id] = await this.knex('carts')
        .insert({
          user_id: userId,
          created_at: new Date(),
          updated_at: new Date(),
          status: 'OPEN',
        })
        .returning('id');

      return {
        id,
        items: [],
      };
    } catch (e) {
      console.log('createByUserId Error: ', e);
    }
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    let userCart = await this.findByUserId(userId);
    if (!userCart) {
      userCart = await this.createByUserId(userId);
    }

    return userCart;
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    try {
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
    } catch (e) {
      console.log('updateByUserId Error: ', e);
    }
  }

  async removeByUserId(userId: string): Promise<void> {
    try {
      const cart = await this.findByUserId(userId);

      if (!cart) {
        return;
      }

      await this.knex('cart_items').where({ cart_id: cart.id }).del();
      await this.knex('carts').where({ id: cart.id }).del();
    } catch (e) {
      console.log('removeByUserId Error: ', e);
    }
  }
}
