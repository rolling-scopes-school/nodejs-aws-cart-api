import { Test, TestingModule } from '@nestjs/testing';
import { config } from 'dotenv';
import db from 'src/database/pg/knex';
import { OrderRepository } from './order.repository';
import { DatabaseModule } from 'src/database/pg/database.module';
import { PGTable } from 'src/database/pg/table.enum';
import { randomUUID } from 'crypto';
import { OrderStatus } from '../type';

config();

const cartItems = [
  { productId: 'f4a1a4b2-60b0-4051-b1ae-33c6eea11cab', count: 1 },
  { productId: 'c589bc2b-4394-430b-84f4-6cf70da1775e', count: 2 },
  { productId: '440c3edf-b85b-41ab-9055-0634e2a8506f', count: 2 },
];

describe('order repository', () => {
  let orderRepository: OrderRepository;
  let userId: string;
  let cartId: string;

  beforeAll(async () => {
    await db.migrate.latest();

    userId = await seedFakeUser();
    cartId = await seedFakeCart(userId);
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderRepository],
      imports: [DatabaseModule],
    }).compile();

    orderRepository = module.get<OrderRepository>(OrderRepository);
  });

  afterEach(async () => {
    await db(PGTable.orderItems).del();
    await db(PGTable.orderStatuses).del();
    await db(PGTable.orders).del();
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  describe('create method', () => {
    it('should create records in orders table', async () => {
      const payload = createFakeOrderPayload(userId, cartId);
      await expect(orderRepository.create(payload)).resolves.toBe(undefined);
    });
  });

  describe('getAll method', () => {
    it('should return response with proper fields', async () => {
      const payload = createFakeOrderPayload(userId, cartId);
      await orderRepository.create(payload);

      const res = await orderRepository.getAll();

      expect(Object.keys(res[0])).toHaveLength(6);
      expect(res[0]).toHaveProperty('id');
      expect(res[0]).toHaveProperty('userId');
      expect(res[0]).toHaveProperty('items');
      expect(res[0]).toHaveProperty('cartId');
      expect(res[0]).toHaveProperty('address');
      expect(res[0]).toHaveProperty('statusHistory');
      expect(res[0].items[0]).toHaveProperty('productId');
      expect(res[0].items[0]).toHaveProperty('count');
      expect(res[0].statusHistory[0]).toHaveProperty('status');
      expect(res[0].statusHistory[0]).toHaveProperty('timestamp');
      expect(res[0].statusHistory[0]).toHaveProperty('comment');
    });
  });
});

function createFakeOrderPayload(userId: string, cartId: string) {
  return {
    id: randomUUID() as string,
    userId,
    address: {
      address: 'test address',
      comment: 'test comment',
      firstName: 'John',
      lastName: 'Doe',
    },
    cartId: cartId,
    items: cartItems,
    statusHistory: [
      {
        comment: '',
        status: OrderStatus.Open,
        timestamp: Date.now(),
      },
    ],
  };
}

async function seedFakeUser() {
  const userId: string = randomUUID();

  await db(PGTable.users).insert({
    id: userId,
    name: 'test',
    password: 'test',
    email: 'test-email',
  });

  return userId;
}

async function seedFakeCart(userId: string) {
  const timestamp = Date.now();
  const cartId: string = randomUUID();

  await db.transaction(async (trx) => {
    await trx(PGTable.carts).insert({
      id: cartId,
      user_id: userId,
      created_at: timestamp,
      updated_at: timestamp,
      status: OrderStatus.Open,
    });

    await trx(PGTable.cartItems).insert(
      cartItems.map((item) => ({
        cart_id: cartId,
        product_id: item.productId,
        count: item.count,
      })),
    );
  });

  return cartId;
}
