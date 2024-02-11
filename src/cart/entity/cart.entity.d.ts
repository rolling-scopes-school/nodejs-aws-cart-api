import { UserEntity } from "src/users/entity/user.entity";
export declare class CartEntity {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    user: UserEntity;
}
