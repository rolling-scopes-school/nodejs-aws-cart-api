import {
  Controller,
  Get,
  Delete,
  Put,
  Body,
  Req,
  UseGuards,
  HttpStatus,
  ValidationPipe,
  Post,
} from '@nestjs/common';

import { BasicAuthGuard, JwtAuthGuard } from '../auth';
import { OrderService } from '../order';
import { AppRequest, getUserIdFromRequest } from '../shared';

import { calculateCartTotal } from './models-rules';
import { CartService } from './services';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartStatuses } from './models';
import { CheckoutDto } from 'src/order/dto/checkout.dto';

@Controller('cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @UseGuards(BasicAuthGuard)
  @Get()
  async findUserCart(@Req() req: AppRequest) {
    try {
      const userReq = getUserIdFromRequest(req);
      console.log('userReq', userReq);
      const cart = await this.cartService.findOrCreateByUserId(
        getUserIdFromRequest(req),
      );
      const cartItems = await this.cartService.findItemsByCartId(cart.id);
      console.log('cartItems', cartItems);
      console.log('cart', cart);
      const result = {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: {
          ...cart,
          items: cartItems,
          // total: calculateCartTotal(cart)
        },
      };
      console.log('cartResult', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // @UseGuards(JwtAuthGuard)
  @UseGuards(BasicAuthGuard)
  @Put()
  async updateUserCart(
    @Req() req: AppRequest,
    @Body(new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
    updateCartDto: UpdateCartDto,
  ) {
    console.log('updateCartDto', updateCartDto);
    try {
      const cart = await this.cartService.updateByUserId(
        getUserIdFromRequest(req),
        updateCartDto,
      );

      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: {
          cart,
          // total: calculateCartTotal(cart),
        },
      };
    } catch (error) {
      console.log(error);
    }
  }

  // @UseGuards(JwtAuthGuard)
  @UseGuards(BasicAuthGuard)
  @Delete()
  async clearUserCart(@Req() req: AppRequest) {
    try {
      await this.cartService.removeByUserId(getUserIdFromRequest(req));

      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
      };
    } catch (error) {
      console.log(error);
    }
  }

  // @UseGuards(JwtAuthGuard)
  @UseGuards(BasicAuthGuard)
  @Post('checkout')
  async checkout(
    @Req() req: AppRequest,
    @Body(new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
    checkoutDto: CheckoutDto,
  ) {
    console.log('checkoutDto', checkoutDto);
    try {
      const userId = getUserIdFromRequest(req);
      const cart = await this.cartService.findByUserId(userId);
      const cartItems = await this.cartService.findItemsByCartId(cart.id);
      console.log('cartId', cart.id);
      console.log('cartItems', cartItems);
      if (!(cart && cartItems.length)) {
        const statusCode = HttpStatus.BAD_REQUEST;
        req.statusCode = statusCode;
        return {
          statusCode,
          message: 'Cart is empty',
        };
      }
      const { id: cartId } = cart;
      // const total = calculateCartTotal(cart);

      const order = await this.orderService.create({
        ...checkoutDto,
        userId,
        cartId,
        status: CartStatuses.ORDERED,
        total: cartItems.length,
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: { order },
      };
    } catch (error) {
      console.log(error);
    }
  }
}
