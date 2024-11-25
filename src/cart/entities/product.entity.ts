import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column('decimal')
  price: number;
}
