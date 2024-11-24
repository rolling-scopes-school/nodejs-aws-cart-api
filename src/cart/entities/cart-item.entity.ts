import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartEntity } from './cart.entity';
import { ProductEntity } from './product.entity';

@Entity('cart_item')
export class CartItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ProductEntity, { eager: true })
  product: ProductEntity;

  @Column('int')
  count: number;

  @ManyToOne(() => CartEntity, cart => cart.items)
  cart: CartEntity;
}
