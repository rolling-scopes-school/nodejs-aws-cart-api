import { Controller, Post, Body, Param } from '@nestjs/common';
import { CartService } from './services/cart.service';
import { Order } from '../order/order.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('checkout')
  async checkout(
    @Body('userId') userId: string,
    @Body('payment') payment: any,
    @Body('delivery') delivery: any,
    @Body('comments') comments: string
  ): Promise<Order> {
    return this.cartService.checkout(userId, payment, delivery, comments);
  }
}
