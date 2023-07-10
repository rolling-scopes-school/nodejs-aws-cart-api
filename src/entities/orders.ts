import { Entity, 
         PrimaryGeneratedColumn,
         Column,
         ManyToOne,
         OneToOne } from "typeorm";
import { Carts } from './carts'
import { Users } from "./users";

export enum status {
    OPEN = 'OPEN',
    ORDERED = 'ORDERED',
}

@Entity()
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false })
    user_id: string;

    @Column({ type: 'uuid', nullable: false })
    cart_id: string;

    @Column(("simple-json"))
    payment:{
        type: string,
        address?: any,
        creditCard?: any
    }

    @Column(("simple-json"))
    delivery:{
        type: string,
        address: any,
    }

    @Column()
    comments: string

    @Column()
    status:status

    @Column()
    total: number

    @ManyToOne(
        () => Users, user => user.order, { cascade: true },
    ) user=Users

    @OneToOne(
        ()=> Carts, cart=>cart.orders
    ) carts=Carts
}
