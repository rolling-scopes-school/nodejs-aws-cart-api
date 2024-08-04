import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CartItem } from '../cart-item/cart-item.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'enum', enum: ['OPEN', 'ORDERED'], default: 'OPEN' })
  status: 'OPEN' | 'ORDERED';

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  items: CartItem[];
}
