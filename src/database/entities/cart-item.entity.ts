import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CartEntity } from './cart.entity';

@Entity({ name: 'cart_items' })
export class CartItemEntity {
  @PrimaryColumn('uuid')
  cartId: string;

  @PrimaryColumn('uuid')
  productId: string;

  @Column({ type: 'int' })
  count: number;

  @ManyToOne(() => CartEntity, (cart) => cart.items)
  @JoinColumn({ name: 'cartId', referencedColumnName: 'id' })
  cart: CartEntity;
}
