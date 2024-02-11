import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'user' })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: true })
    name: string;

    @Column({ type: 'varchar', nullable: true })
    email: string;

    @Column({ type: 'varchar', nullable: true })
    password: string

}