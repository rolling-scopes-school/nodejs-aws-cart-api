import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Order } from '../models';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/order.entity';
import { DataSource, Repository } from 'typeorm';
import { CartService, CartStatuses } from 'src/cart';
import { CartEntity } from 'src/database/entities/cart.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,

    private cartService: CartService,

    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
  ) {}

  async findById(orderId: string) {
    return await this.orderRepo.findOneBy({ id: orderId });
  }

  async create(data: Order) {
    try {
      const id = v4();
      const newOrder = this.orderRepo.create({
        id,
        ...data,
      });

      console.log('data source', this.dataSource);
      const order = await this.dataSource.manager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(OrderEntity, newOrder);
          const cart = await this.cartService.findByUserId(data.userId);
          cart.status = CartStatuses.ORDERED;
          await transactionalEntityManager.save(CartEntity, cart);
          const cartItems = await this.cartService.findItemsByCartId(cart.id);
          return { ...newOrder, items: cartItems };
        },
      );
      console.log('order', order);
      return order;
    } catch (error) {
      console.log(error);
    }
  }

  async update(orderId: string, data: Order) {
    try {
      const order = await this.findById(orderId);

      if (!order) {
        throw new Error('Order does not exist.');
      }
      const newOrder = this.orderRepo.create({
        id: orderId,
        ...data,
      });
      await this.orderRepo.save(newOrder);
    } catch (error) {
      console.log(error);
    }
  }
}
