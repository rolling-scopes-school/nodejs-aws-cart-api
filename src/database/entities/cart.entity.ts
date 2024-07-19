import { CartStatuses } from 'src/cart';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column({ type: 'date' })
  createdAt: string;

  @Column({ type: 'date' })
  updatedAt: string;

  @Column({
    type: 'enum',
    enum: CartStatuses,
    default: CartStatuses.OPEN,
  })
  status: CartStatuses;

  @OneToMany(() => Order, (order) => order.cart)
  orders: Order[];
}
