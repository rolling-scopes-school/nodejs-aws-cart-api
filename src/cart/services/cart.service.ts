import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from '../entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItemEntity } from '../entities/cart-item.entity';
import { ProductEntity } from '../entities/product.entity';
import { CartItem, Product } from '../models';

@Injectable()
export class CartService {
  private userCarts: Record<string, any> = {};

  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(CartItemEntity)
    private readonly cartItemRepository: Repository<CartItemEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findByUserId(userId: string): Promise<CartEntity> {
    const userCart = await this.cartRepository.findOne({
      where: { user_id: userId },
      relations: ['items', 'items.product'],
    });

    if (!userCart) {
      return null;
    }

    return userCart;
  }

  async createByUserId(userId: string): Promise<CartEntity> {
    const userCart = this.cartRepository.create({ user_id: userId, items: [] });

    return await this.cartRepository.save(userCart);
  }

  async findOrCreateByUserId(userId: string): Promise<CartEntity> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    // @ts-ignore
    return await this.createByUserId(userId);
  }

  async updateByUserId(userId: string, cartItemDto: CartItem): Promise<CartEntity> {
    const cart = await this.findOrCreateByUserId(userId);

    const product = await this.findOrCreateProduct(cartItemDto.product);

    const foundCartItem = await this.cartItemRepository.findOne({ where: { cart, product } });

    let upsertCartItem: CartItemEntity;
    if (foundCartItem) {

      if (cartItemDto.count <= 0) {
        await this.cartItemRepository.delete(foundCartItem);

        return await this.findOrCreateByUserId(userId);
      }

      upsertCartItem = {
        ...foundCartItem,
        count: cartItemDto.count,
      }
    } else {
      upsertCartItem = this.cartItemRepository.create({ count: cartItemDto.count, cart, product });
    }

    await this.cartItemRepository.save(upsertCartItem);

    return await this.findOrCreateByUserId(userId);
  }

  removeByUserId(userId): void {
    this.userCarts[ userId ] = null;
  }

  private async findOrCreateProduct(productDto: Product): Promise<ProductEntity> {
    const foundProduct = await this.productRepository.findOne({ where: { id: productDto.id } });

    if (foundProduct) {
      return foundProduct;
    }

    const newProduct = this.productRepository.create(productDto);
    return await this.productRepository.save(newProduct);
  }

}

