import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CartStatuses } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItemEntity } from 'src/database/entities/cart-item.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepo: Repository<CartEntity>,

    @InjectRepository(CartItemEntity)
    private readonly cartItemRepo: Repository<CartItemEntity>,
  ) {}

  async findByUserId(userId: string) {
    return await this.cartRepo.findOneBy({ userId });
  }

  async createByUserId(userId: string) {
    console.log('userId from createUser', userId);
    try {
      const id = v4();
      console.log('newId', id);

      const newCart = this.cartRepo.create({
        id,
        userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: CartStatuses.OPEN,
      });
      console.log('newCart from createUser', newCart);
      const userCart = await this.cartRepo.save(newCart);

      return userCart;
    } catch (error) {
      console.log(error);
    }
  }

  async findOrCreateByUserId(userId: string) {
    console.log('userId', userId);
    const userCart = await this.cartRepo.findOneBy({ userId });
    if (userCart) {
      console.log('existedUserCartId', userCart.id);
      return userCart;
    }
    const newUserCart = await this.createByUserId(userId);
    console.log('newUserCartId', newUserCart.id);
    return newUserCart;
  }

  async updateByUserId(
    userId: string,
    items: { productId: string; count: number }[],
  ) {
    try {
      const userCart = await this.findOrCreateByUserId(userId);
      if (!userCart) {
        console.log(`Cart of user ${userId} not found.`);
        throw new Error(`Cart of user ${userId} not found.`);
      }
      await this.cartItemRepo.delete({ cartId: userCart.id });

      const newCartItems = items.map((item) =>
        this.cartItemRepo.create({
          cartId: userCart.id,
          productId: item.productId,
          count: item.count,
        }),
      );
      await this.cartItemRepo.save(newCartItems);
      userCart.updatedAt = new Date().toISOString();

      await this.cartRepo.save(userCart);
      return userCart;
    } catch (error) {
      console.log(error);
    }
  }

  async removeByUserId(userId: string) {
    console.log('userIdToRemove', userId);
    try {
      const userCart = await this.findByUserId(userId);
      if (!userCart) {
        console.log(`Cart of user ${userId} not found.`);
        throw new Error(`Cart of user ${userId} not found.`);
      } else {
        await this.cartRepo.delete({ userId });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
