import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';
import { DatabaseModule } from 'src/database/pg/database.module';
import { ConfigModule } from '@nestjs/config';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartService, CartRepository],
      imports: [DatabaseModule, ConfigModule],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
