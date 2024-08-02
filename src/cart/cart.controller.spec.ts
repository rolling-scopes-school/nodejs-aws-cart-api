import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { OrderModule } from '../order/order.module';
import { CartService } from './services';
// import { AppRequest } from 'src/shared';
import { config } from 'dotenv';
import db from '../database/pg/knex';
import { CartRepository } from './services/cart.repository';
import { DatabaseModule } from 'src/database/pg/database.module';
import { ConfigModule } from '@nestjs/config';

config();

describe('CartController', () => {
  let controller: CartController;

  beforeAll(async () => {
    await db.migrate.latest();
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService, CartRepository],
      imports: [OrderModule, DatabaseModule, ConfigModule],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
