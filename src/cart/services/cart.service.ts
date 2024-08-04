import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { Cart } from '../models';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private connection: Connection
  ) {}
  
  private userCarts: Record<string, Cart> = {};

  findByUserId(userId: string): Cart {
    return this.userCarts[ userId ];
  }

  createByUserId(userId: string) {
    const id = v4();
    const userCart = {
      id,
      items: [],
    };

    this.userCarts[ userId ] = userCart;

    return userCart;
  }

  findOrCreateByUserId(userId: string): Cart {
    const userCart = this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  updateByUserId(userId: string, { items }: Cart): Cart {
    const { id, ...rest } = this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      items: [ ...items ],
    }

    this.userCarts[ userId ] = { ...updatedCart };

    return { ...updatedCart };
  }

  removeByUserId(userId): void {
    this.userCarts[ userId ] = null;
  }


  async checkout(userId: string, payment: any, delivery: any, comments: string): Promise<Order> {
    return await this.connection.transaction(async (manager) => {
      const cart = await manager.findOne(Cart, { where: { user_id: userId, status: 'OPEN' }, relations: ['items'] });
      if (!cart) {
        throw new Error('Cart not found');
      }

      cart.status = 'ORDERED';
      await manager.save(cart);

      const order = new Order();
      order.user_id = userId;
      order.cart = cart;
      order.payment = payment;
      order.delivery = delivery;
      order.comments = comments;
      order.status = 'PENDING';
      order.total = cart.items.reduce((acc, item) => acc + item.count * item.price, 0);

      await manager.save(order);

      return order;
    });
  }
}
