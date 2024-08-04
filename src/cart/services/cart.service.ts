import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private connection: Connection
  ) {}

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
