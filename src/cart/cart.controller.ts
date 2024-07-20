import {
  Controller,
  Get,
  Delete,
  Put,
  Body,
  Req,
  Post,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';

import { OrderService } from '../order/services';
import { AppRequest, getUserIdFromRequest } from '../shared';

import { calculateCartTotal } from './models-rules';
import { CartService } from './services';
import { Cart } from './models';
import { BasicAuthGuard } from 'src/auth';

@Controller('api/profile/cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  @Get()
  async findUserCart(@Req() req: AppRequest) {
    const cart = await this.cartService.findOrCreateByUserId(
      getUserIdFromRequest(req),
    );

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { cart, total: calculateCartTotal(cart) },
    };
  }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  @Put()
  async updateUserCart(@Req() req: AppRequest, @Body() body) {
    // TODO: validate body payload...

    let cart = null;
    if (body.cartId) {
      cart = await this.cartService.updateCartItemCount(
        body.cartId,
        body.productId,
        body.count,
      );
    } else {
      cart = await this.cartService.addProductToCart(
        getUserIdFromRequest(req),
        body.productId,
        body.count,
      );
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: {
        cart,
        total: calculateCartTotal(cart as Cart),
      },
    };
  }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  @Delete()
  clearUserCart(@Req() req: AppRequest) {
    this.cartService.removeByUserId(getUserIdFromRequest(req));

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
    };
  }

  // @UseGuards(JwtAuthGuard)
  @UseGuards(BasicAuthGuard)
  @Post('checkout')
  async checkout(@Req() req: AppRequest, @Body() body) {
    const userId = getUserIdFromRequest(req);
    const cart = await this.cartService.findByUserId(userId);

    if (!(cart && cart.items.length)) {
      const statusCode = HttpStatus.BAD_REQUEST;
      req.statusCode = statusCode;

      return {
        statusCode,
        message: 'Cart is empty',
      };
    }

    const { id: cartId } = cart;
    const total = calculateCartTotal(cart as Cart);
    const orderData = {
      user_id: userId,
      cart_id: cartId,
      payment: {
        type: 'CREDIT_CARD', // no data from the client side :'(
        address: body.address.address,
        creaditCard: '0000-0000-0000-0000', // no data from the client side :'(
      },
      delivery: {
        address: body.address,
      },
      comments: body.address.comment,
      status: 'OPEN',
      statusHistory: [
        {
          status: 'OPEN',
          timestamp: new Date(),
          comment: 'Order has been created',
        },
      ],
      total,
    };

    const order = await this.orderService.completeCheckout(orderData);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { order },
    };
  }
}
