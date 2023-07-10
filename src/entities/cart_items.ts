import { Entity,
    Column,
    ManyToOne,
    PrimaryColumn } from "typeorm";
import { Carts } from "./carts";

@Entity()
export class CartItems {

    @PrimaryColumn({ type: 'uuid' })
    cart_id: string;

    @Column({ type: 'uuid', nullable: false })
    product_id: string;

    @Column()
    count: number;

    @ManyToOne(
    () => Carts,
        (cart) => cart.items,
    ) cart=Carts
}