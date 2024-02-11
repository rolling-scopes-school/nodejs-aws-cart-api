import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity({ name: 'carts' })
export class CartEntity {

    @PrimaryColumn({ type: 'uuid' })
    id: string

    @Column({ name: 'user_id', type: 'uuid', nullable: true })
    userId: string

    @Column({ name: 'created_at', type: 'date', nullable: true })
    createdAt: Date

    @Column({ name: 'updated_at', type: 'date', nullable: true })
    updatedAt: Date

    @Column({ type: 'enum', enum: ['OPEN', 'ORDERED'], default: 'OPEN' })
    status: string

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity
}