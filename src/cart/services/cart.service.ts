import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { v4 } from 'uuid';
import { CartEntity } from '../entity/cart.entity';
import { Repository } from 'typeorm';
import { CartItemEntity } from '../entity/cart-item.entity';
import { UserEntity } from 'src/users/entity/user.entity';

@Injectable()
export class CartService {
  constructor (
    @InjectRepository(CartEntity)
    private CartRepository: Repository<CartEntity>,

    @InjectRepository(CartItemEntity)
    private CartItemRepository: Repository<CartItemEntity>,

    @InjectRepository(UserEntity)
    private UserRepository: Repository<UserEntity>

  ) {}

  async findByUserId(userId: string): Promise<{cart: CartEntity; items: CartItemEntity[]}> {
    const userCart = await this.CartRepository.findOneBy({ userId });
    const items = await this.CartItemRepository.find({
      where: {
        cart: userCart
      }
    })
    return { cart: userCart, items }
  }

  async createByUserId(userId: string): Promise<CartEntity> {
    const user = await this.UserRepository.findOne({
      where: {
        id: userId
      }
    })
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    const newCart: CartEntity = {
      id: v4(),
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'OPEN',
      user
    };
    return this.CartRepository.save(newCart)
  }

  async findOrCreateByUserId(userId: string): Promise<{ cart: CartEntity; items: CartItemEntity[] }> {
    const { cart } = await this.findByUserId(userId);

    const items = await this.CartItemRepository.find({
      where: {
        cart
      }
    })

    if (cart) {
      return { cart, items }
    }
    const newUserCart = await this.createByUserId(userId);
    return { cart: newUserCart, items: [] as CartItemEntity[] };
  }

  async updateByUserId(userId: string, items: CartItemEntity[]): Promise<{ cart: CartEntity; items: CartItemEntity[] }> {
    const userCart = await this.findByUserId(userId);
    items.forEach((item) => {
      const updatedCartItem = {
        ...item,
        userId
      };
      return this.CartItemRepository.save(updatedCartItem);
    })
    return userCart;
  }

  async removeByUserId(userId): Promise<CartEntity> {
    const { cart } = await this.findByUserId(userId);
    return this.CartRepository.remove(cart);
  }

}
