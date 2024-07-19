import { Column, Entity } from 'typeorm';

@Entity({ name: 'cart_items' })
export class CartItemEntity {
  @Column({ type: 'int' })
  count: number;

  @Column('uuid')
  productId: string;

  @Column('uuid')
  cartId: string;
}
