import { CartEntity } from '../entity/cart.entity';
import { Repository } from 'typeorm';
import { CartItemEntity } from '../entity/cart-item.entity';
import { UserEntity } from 'src/users/entity/user.entity';
export declare class CartService {
    private CartRepository;
    private CartItemRepository;
    private UserRepository;
    constructor(CartRepository: Repository<CartEntity>, CartItemRepository: Repository<CartItemEntity>, UserRepository: Repository<UserEntity>);
    findByUserId(userId: string): Promise<{
        cart: CartEntity;
        items: CartItemEntity[];
    }>;
    createByUserId(userId: string): Promise<CartEntity>;
    findOrCreateByUserId(userId: string): Promise<{
        cart: CartEntity;
        items: CartItemEntity[];
    }>;
    updateByUserId(userId: string, items: CartItemEntity[]): Promise<{
        cart: CartEntity;
        items: CartItemEntity[];
    }>;
    removeByUserId(userId: any): Promise<CartEntity>;
}
