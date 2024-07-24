import { CartStatuses } from 'src/cart';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartEntity } from './cart.entity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column('uuid')
  cartId: string;

  @Column('simple-json')
  payment: {
    type: string;
  };

  @Column('simple-json')
  delivery: {
    type: string;
    address: string;
  };

  @Column('text', { nullable: true })
  comments: string;

  @Column({
    type: 'enum',
    enum: CartStatuses,
    default: CartStatuses.OPEN,
  })
  status: CartStatuses;

  @Column('int')
  total: number;

  @ManyToOne(() => CartEntity, (cart) => cart.orders)
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart: CartEntity;
}
