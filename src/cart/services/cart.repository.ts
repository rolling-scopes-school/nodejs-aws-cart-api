import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import {
  Cart,
  CartItem,
  CartStatuses,
  DynamoDBTable,
  FindCartByIdPGRes,
  PreCart,
} from '../models';
import { Inject } from '@nestjs/common/decorators';
import { PG_CONNECTION } from 'src/database/pg/database.module';
import { PGTable } from 'src/database/pg/table.enum';
import { PutCartPayload } from 'src/order/type';
import { ddbDocClient } from 'src/database/dynamodb/aws.config';
import { BatchGetCommand } from '@aws-sdk/lib-dynamodb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CartRepository {
  constructor(
    @Inject(PG_CONNECTION) private readonly knex: Knex<any>,
    private readonly configService: ConfigService,
  ) {}

  async findByUserId(userId: string) {
    const res = await this.knex
      .select<FindCartByIdPGRes>(
        `${PGTable.carts}.id`,
        `${PGTable.carts}.user_id`,
        `${PGTable.carts}.created_at`,
        `${PGTable.carts}.updated_at`,
        `${PGTable.carts}.status`,
        `${PGTable.cartItems}.product_id`,
        `${PGTable.cartItems}.count`,
      )
      .from(PGTable.carts)
      .leftJoin(
        PGTable.cartItems,
        `${PGTable.carts}.id`,
        `${PGTable.cartItems}.cart_id`,
      )
      .where(`${PGTable.carts}.user_id`, userId)
      .andWhere(`${PGTable.carts}.status`, CartStatuses.OPEN);

    if (res.length === 0) {
      return undefined;
    }

    const preCart = res.reduce((acc, { product_id, count, ...rest }) => {
      if (acc.items && acc.items.length) {
        acc.items.push({ product_id, count });
      } else if (!acc.items && !product_id) {
        acc.items = [];
      } else {
        acc.items = [{ product_id, count }];
      }

      return {
        ...rest,
        items: acc.items,
      };
    }, {} as Partial<PreCart>);

    if (preCart.items.length) {
      const productIds = preCart.items.map(({ product_id: id }) => ({ id }));

      const RequestItems = { [DynamoDBTable.product]: { Keys: productIds } };
      const result = await ddbDocClient(this.configService).send(
        new BatchGetCommand({ RequestItems }),
      );

      const items: CartItem[] = result.Responses.product.map((item) => ({
        product: item as CartItem['product'],
        count:
          preCart.items.find(({ product_id: id }) => id === item.id).count || 0,
      }));
      const cart = preCart as unknown as Cart;
      cart.items = items;

      return cart;
    }

    return {
      ...preCart,
      items: [],
    } as Cart;
  }

  create(cart: Cart) {
    return this.knex.transaction(async (trx) => {
      await trx(PGTable.carts).insert({
        id: cart.id,
        user_id: cart.user_id,
        created_at: cart.created_at,
        updated_at: cart.updated_at,
        status: cart.status,
      });

      if (cart.items.length > 0) {
        await trx(PGTable.cartItems).insert(
          cart.items.map((item) => ({
            cart_id: cart.id,
            product_id: item.product.id,
            count: item.count,
          })),
        );
      }
    });
  }

  addCartItem(cart_id: string, payload: PutCartPayload) {
    return this.knex(PGTable.cartItems).insert({
      cart_id: cart_id,
      product_id: payload.product.id,
      count: payload.count,
    });
  }
  updateCount(cart_id: string, payload: PutCartPayload) {
    return this.knex(PGTable.cartItems)
      .update({
        count: payload.count,
      })
      .where('cart_id', cart_id)
      .andWhere('product_id', payload.product.id);
  }

  removeCartItem(cart_id: string, payload: PutCartPayload) {
    return this.knex(PGTable.cartItems)
      .delete()
      .where('cart_id', cart_id)
      .andWhere('product_id', payload.product.id);
  }

  async updateCartStatus(userId: string) {
    await this.knex(PGTable.carts)
      .update({ status: CartStatuses.ORDERED })
      .where('user_id', userId)
      .andWhere('status', CartStatuses.OPEN);
  }

  async removeCart(userId: string) {
    await this.knex(PGTable.carts)
      .delete()
      .where('user_id', userId)
      .andWhere('status', CartStatuses.OPEN);
  }
}
