import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CartModule } from '../src/cart/cart.module';
import { CartService } from 'src/cart';
import { CartRepository } from 'src/cart/services/cart.repository';

const mockProduct = {
  product: {
    description: 'Short Product Description1',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
    price: 24,
    title: 'ProductOne',
  },
  count: 3,
};

describe('CartController (e2e)', () => {
  it('foo', () => {
    expect(true).toBeTruthy();
  });
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [CartService, CartRepository],
      imports: [CartModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/profile/cart GET', () => {
    return request(app.getHttpServer()).get('/api/profile/cart').expect(200);
  });

  it('/api/profile/cart PUT', () => {
    return request(app.getHttpServer())
      .put('/api/profile/cart')
      .send(mockProduct)
      .expect(200);
  });
});
