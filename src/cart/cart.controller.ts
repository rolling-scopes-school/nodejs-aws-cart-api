import { Controller, Get, Delete, Put, Body, Req, Post, UseGuards, HttpStatus, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { BasicAuthGuard } from '../auth';
import { Order, OrderService } from '../order';
import { AppRequest, getUserIdFromRequest } from '../shared';
import { calculateCartTotal } from './models-rules';
import { CartService } from './services';
import pg from '../index';
import { Knex } from 'knex';
import { ApiTags } from '@nestjs/swagger';

interface RequestBody {
  product: {
    id: string,
    price: number,
    title: string,
    description: string,
  },
  count: number
}

@ApiTags('app')
@Controller('api/profile/cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }


  @UseGuards(BasicAuthGuard)
  @Get()
  async findUserCart(@Req() req: AppRequest) {
    const cart = await this.cartService.findOrCreateByUserId(getUserIdFromRequest(req));

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { 
        cart, 
        total: 666
      },
    }
  }

  @UseGuards(BasicAuthGuard)
  @Put()
  async updateUserCart(@Req() req: AppRequest, @Body() body: RequestBody) { // TODO: validate body payload...
    console.log('Passing the following parameters:', body)
    const cart = await this.cartService.updateByUserId(getUserIdFromRequest(req), body)
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: {
        cart,
        total: 666
      }
    }
  }


  @UseGuards(BasicAuthGuard)
  @Delete()
  clearUserCart(@Req() req: AppRequest) {
    this.cartService.removeByUserId(getUserIdFromRequest(req));

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
    }
  }


  @UseGuards(BasicAuthGuard)
  @Post('checkout')
  async checkout(@Req() req: AppRequest, @Body() body) {
    const userId = getUserIdFromRequest(req);
    const cart = await this.cartService.findByUserId(userId);

    if (!(cart && cart.items.length)) {
      throw new BadRequestException('Cart is empty');
    }

    let order: Order;
    let cartStatus: string;
    const { id: cartId, items } = cart;
    // checkout transaction
    let trx = await pg.transaction();
    try {
      console.log('checkout, transaction is about to start for', userId, cart);
      const total = 666
      const order = await this.orderService.create(trx, {
        user_id: userId,
        cart_id: cartId,
        total: total,
        ...body,
      }) as any as Order;
      console.log('order created, changing the cart status');
      const [{ status }] = await this.cartService.changeStatus(trx, cartId);
      await trx.commit();
      cartStatus = status;
    } catch (error) {
      await trx.rollback();
      throw new InternalServerErrorException(`Transaction failed: ${error}`);
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: {
        cart_status: cartStatus,
        order: {items: items, ...order} 
      }
    }
  }
}
