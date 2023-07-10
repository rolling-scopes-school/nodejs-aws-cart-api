import { Entity, 
         PrimaryGeneratedColumn,
         Column,
         OneToMany } from "typeorm";
import { Orders } from "./orders";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false })
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @OneToMany(
    () => Orders,
        order => order.user,
    ) order=Orders
}