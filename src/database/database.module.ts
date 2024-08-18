import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CartEntity } from './entities/cart.entity';
import { CartItemEntity } from './entities/cart-item.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrderEntity } from './entities/order.entity';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log('CartEntity', CartEntity);
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: parseInt(configService.get<string>('DB_PORT')),
          username: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          entities: [CartEntity, CartItemEntity, OrderEntity, UserEntity],
          synchronize: true,
          logging: true,
          namingStrategy: new SnakeNamingStrategy(),
        };
      },
    }),
    TypeOrmModule.forFeature([
      CartEntity,
      CartItemEntity,
      OrderEntity,
      UserEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
