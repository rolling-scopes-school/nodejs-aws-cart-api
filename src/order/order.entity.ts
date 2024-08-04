import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cart } from '../cart/cart.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @ManyToOne(() => Cart)
  cart: Cart;

  @Column({ type: 'json' })
  payment: Record<string, any>;

  @Column({ type: 'json' })
  delivery: Record<string, any>;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @Column({ type: 'enum', enum: ['ORDERED', 'SHIPPED', 'DELIVERED', 'CANCELLED'] })
  status: 'ORDERED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

  @Column({ type: 'numeric' })
  total: number;
}
