import { HttpStatus } from '@nestjs/common';
import { OrderService } from '../order';
import { AppRequest } from '../shared';
import { CartService } from './services';
export declare class CartController {
    private cartService;
    private orderService;
    constructor(cartService: CartService, orderService: OrderService);
    findUserCart(req: AppRequest): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            cart: import("./entity/cart.entity").CartEntity;
            total: number;
        };
    }>;
    updateUserCart(req: AppRequest, body: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            cart: import("./entity/cart.entity").CartEntity;
            total: number;
        };
    }>;
    clearUserCart(req: AppRequest): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    checkout(req: AppRequest, body: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: {
            order: any;
        };
    }>;
}
