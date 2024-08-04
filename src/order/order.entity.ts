import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Cart } from '../cart/cart.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Cart, (cart) => cart.orders)
  cart: Cart;

  @Column({ type: 'jsonb' })
  payment: any;

  @Column({ type: 'jsonb' })
  delivery: any;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @Column({ type: 'enum', enum: ['PENDING', 'COMPLETED'], default: 'PENDING' })
  status: 'PENDING' | 'COMPLETED';

  @Column({ type: 'decimal' })
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
