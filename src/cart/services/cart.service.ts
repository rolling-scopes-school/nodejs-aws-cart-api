import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { v4 } from 'uuid';
import { Cart, CartStatuses } from '../models';

const pool = new Pool({
  user: process.env.AWS_POSTGRES_DB_USER,
  host: process.env.AWS_POSTGRES_DB_HOST,
  database: process.env.AWS_POSTGRES_DB_NAME,
  password: process.env.AWS_POSTGRES_DB_PASSWORD,
  port: parseInt(process.env.AWS_POSTGRES_DB_PORT, 10),
});

@Injectable()
export class CartService {

  private userCarts: Record<string, Cart> = {};


  async findByUserId(userId: string) {
    const { rows } = await pool.query(
      'SELECT * FROM carts WHERE user_id = $1',
      [userId],
    );
    return rows[0];
  }

  async createByUserId(userId: string) {
    const id = v4();
    const createdAt = new Date().toISOString();
    const status = CartStatuses.OPEN;

    const { rows } = await pool.query(
      'INSERT INTO carts(id, items, user_id, created_at, updated_at, status) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [id, JSON.stringify([]), userId, createdAt, createdAt, status],
    );

    return rows[0];
  }

  async findOrCreateByUserId(userId: string) {
    const cart = await this.findByUserId(userId);

    if (cart) {
      return cart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }) {
    const cart = await this.findOrCreateByUserId(userId);

    const { rows } = await pool.query(
      'UPDATE carts SET items = $1, updated_at = $2 WHERE id = $3 RETURNING *',
      [JSON.stringify(items), new Date().toISOString(), cart.id],
    );

    return rows[0];
  }

  removeByUserId(userId: string): void {
    this.userCarts[userId] = null;
  }
}

// @Injectable()
// export class CartService {
//   private userCarts: Record<string, Cart> = {};

//   findByUserId(userId: string): Cart {
//     return this.userCarts[ userId ];
//   }

//   createByUserId(userId: string) {
//     const id = v4();
//     const userCart = {
//       id,
//       items: [],
//       user_id: userId,
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//       status: CartStatuses.OPEN,
//     };

//     this.userCarts[ userId ] = userCart;

//     return userCart;
//   }

//   findOrCreateByUserId(userId: string): Cart {
//     const userCart = this.findByUserId(userId);

//     if (userCart) {
//       return userCart;
//     }

//     return this.createByUserId(userId);
//   }

//   updateByUserId(userId: string, { items }: Cart): Cart {
//     const { id, ...rest } = this.findOrCreateByUserId(userId);

//     const updatedCart = {
//       id,
//       ...rest,
//       items: [ ...items ],
//     }

//     this.userCarts[ userId ] = { ...updatedCart };

//     return { ...updatedCart };
//   }

//   removeByUserId(userId): void {
//     this.userCarts[ userId ] = null;
//   }

// }
