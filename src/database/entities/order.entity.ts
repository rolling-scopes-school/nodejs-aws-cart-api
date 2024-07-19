import { CartStatuses } from 'src/cart';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartEntity } from './cart.entity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column('uuid')
  cartId: string;

  @ManyToOne(() => CartEntity)
  cart: CartEntity;

  @Column('simple-json')
  payment: {
    type: string;
    address?: any;
    creditCard?: any;
  };

  @Column('simple-json')
  delivery: {
    type: string;
    address: any;
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
}
