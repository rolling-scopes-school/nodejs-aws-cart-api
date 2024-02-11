"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const cart_entity_1 = require("../entity/cart.entity");
const cart_item_entity_1 = require("../entity/cart-item.entity");
const user_entity_1 = require("src/users/entity/user.entity");
let CartService = class CartService {
    constructor(CartRepository, CartItemRepository, UserRepository) {
        this.CartRepository = CartRepository;
        this.CartItemRepository = CartItemRepository;
        this.UserRepository = UserRepository;
    }
    async findByUserId(userId) {
        const userCart = await this.CartRepository.findOneBy({ userId });
        const items = await this.CartItemRepository.find({
            where: {
                cart: userCart
            }
        });
        return { cart: userCart, items };
    }
    async createByUserId(userId) {
        const user = await this.UserRepository.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        const newCart = {
            id: (0, uuid_1.v4)(),
            userId,
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'OPEN',
            user
        };
        return this.CartRepository.save(newCart);
    }
    async findOrCreateByUserId(userId) {
        const { cart } = await this.findByUserId(userId);
        const items = await this.CartItemRepository.find({
            where: {
                cart
            }
        });
        if (cart) {
            return { cart, items };
        }
        const newUserCart = await this.createByUserId(userId);
        return { cart: newUserCart, items: [] };
    }
    async updateByUserId(userId, items) {
        const userCart = await this.findByUserId(userId);
        items.forEach((item) => {
            const updatedCartItem = {
                ...item,
                userId
            };
            return this.CartItemRepository.save(updatedCartItem);
        });
        return userCart;
    }
    async removeByUserId(userId) {
        const { cart } = await this.findByUserId(userId);
        return this.CartRepository.remove(cart);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.CartEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItemEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity))
], CartService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyRDtBQUMzRCw2Q0FBbUQ7QUFFbkQsK0JBQTBCO0FBQzFCLHVEQUFtRDtBQUVuRCxpRUFBNEQ7QUFDNUQsOERBQTBEO0FBR25ELElBQU0sV0FBVyxHQUFqQixNQUFNLFdBQVc7SUFDdEIsWUFFVSxjQUFzQyxFQUd0QyxrQkFBOEMsRUFHOUMsY0FBc0M7UUFOdEMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBR3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBNEI7UUFHOUMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO0lBRTdDLENBQUM7SUFFSixLQUFLLENBQUMsWUFBWSxDQUFDLE1BQWM7UUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQy9DLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBYztRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQzdDLEtBQUssRUFBRTtnQkFDTCxFQUFFLEVBQUUsTUFBTTthQUNYO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxJQUFJLHNCQUFhLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELE1BQU0sT0FBTyxHQUFlO1lBQzFCLEVBQUUsRUFBRSxJQUFBLFNBQUUsR0FBRTtZQUNSLE1BQU07WUFDTixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSTtTQUNMLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBYztRQUN2QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpELE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMvQyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSTthQUNMO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUE7UUFDeEIsQ0FBQztRQUNELE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQWMsRUFBRSxLQUF1QjtRQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JCLE1BQU0sZUFBZSxHQUFHO2dCQUN0QixHQUFHLElBQUk7Z0JBQ1AsTUFBTTthQUNQLENBQUM7WUFDRixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNO1FBQ3pCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBRUYsQ0FBQTtBQTVFWSxrQ0FBVztzQkFBWCxXQUFXO0lBRHZCLElBQUEsbUJBQVUsR0FBRTtJQUdSLFdBQUEsSUFBQSwwQkFBZ0IsRUFBQyx3QkFBVSxDQUFDLENBQUE7SUFHNUIsV0FBQSxJQUFBLDBCQUFnQixFQUFDLGlDQUFjLENBQUMsQ0FBQTtJQUdoQyxXQUFBLElBQUEsMEJBQWdCLEVBQUMsd0JBQVUsQ0FBQyxDQUFBO0dBUnBCLFdBQVcsQ0E0RXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XHJcblxyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBDYXJ0RW50aXR5IH0gZnJvbSAnLi4vZW50aXR5L2NhcnQuZW50aXR5JztcclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbUVudGl0eSB9IGZyb20gJy4uL2VudGl0eS9jYXJ0LWl0ZW0uZW50aXR5JztcclxuaW1wb3J0IHsgVXNlckVudGl0eSB9IGZyb20gJ3NyYy91c2Vycy9lbnRpdHkvdXNlci5lbnRpdHknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yIChcclxuICAgIEBJbmplY3RSZXBvc2l0b3J5KENhcnRFbnRpdHkpXHJcbiAgICBwcml2YXRlIENhcnRSZXBvc2l0b3J5OiBSZXBvc2l0b3J5PENhcnRFbnRpdHk+LFxyXG5cclxuICAgIEBJbmplY3RSZXBvc2l0b3J5KENhcnRJdGVtRW50aXR5KVxyXG4gICAgcHJpdmF0ZSBDYXJ0SXRlbVJlcG9zaXRvcnk6IFJlcG9zaXRvcnk8Q2FydEl0ZW1FbnRpdHk+LFxyXG5cclxuICAgIEBJbmplY3RSZXBvc2l0b3J5KFVzZXJFbnRpdHkpXHJcbiAgICBwcml2YXRlIFVzZXJSZXBvc2l0b3J5OiBSZXBvc2l0b3J5PFVzZXJFbnRpdHk+XHJcblxyXG4gICkge31cclxuXHJcbiAgYXN5bmMgZmluZEJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7Y2FydDogQ2FydEVudGl0eTsgaXRlbXM6IENhcnRJdGVtRW50aXR5W119PiB7XHJcbiAgICBjb25zdCB1c2VyQ2FydCA9IGF3YWl0IHRoaXMuQ2FydFJlcG9zaXRvcnkuZmluZE9uZUJ5KHsgdXNlcklkIH0pO1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLkNhcnRJdGVtUmVwb3NpdG9yeS5maW5kKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjYXJ0OiB1c2VyQ2FydFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHsgY2FydDogdXNlckNhcnQsIGl0ZW1zIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZUJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxDYXJ0RW50aXR5PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5Vc2VyUmVwb3NpdG9yeS5maW5kT25lKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0NhcnQ6IENhcnRFbnRpdHkgPSB7XHJcbiAgICAgIGlkOiB2NCgpLFxyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICBzdGF0dXM6ICdPUEVOJyxcclxuICAgICAgdXNlclxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLkNhcnRSZXBvc2l0b3J5LnNhdmUobmV3Q2FydClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRPckNyZWF0ZUJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IGNhcnQ6IENhcnRFbnRpdHk7IGl0ZW1zOiBDYXJ0SXRlbUVudGl0eVtdIH0+IHtcclxuICAgIGNvbnN0IHsgY2FydCB9ID0gYXdhaXQgdGhpcy5maW5kQnlVc2VySWQodXNlcklkKTtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHRoaXMuQ2FydEl0ZW1SZXBvc2l0b3J5LmZpbmQoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNhcnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoY2FydCkge1xyXG4gICAgICByZXR1cm4geyBjYXJ0LCBpdGVtcyB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdVc2VyQ2FydCA9IGF3YWl0IHRoaXMuY3JlYXRlQnlVc2VySWQodXNlcklkKTtcclxuICAgIHJldHVybiB7IGNhcnQ6IG5ld1VzZXJDYXJ0LCBpdGVtczogW10gYXMgQ2FydEl0ZW1FbnRpdHlbXSB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQnlVc2VySWQodXNlcklkOiBzdHJpbmcsIGl0ZW1zOiBDYXJ0SXRlbUVudGl0eVtdKTogUHJvbWlzZTx7IGNhcnQ6IENhcnRFbnRpdHk7IGl0ZW1zOiBDYXJ0SXRlbUVudGl0eVtdIH0+IHtcclxuICAgIGNvbnN0IHVzZXJDYXJ0ID0gYXdhaXQgdGhpcy5maW5kQnlVc2VySWQodXNlcklkKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZENhcnRJdGVtID0ge1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgdXNlcklkXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiB0aGlzLkNhcnRJdGVtUmVwb3NpdG9yeS5zYXZlKHVwZGF0ZWRDYXJ0SXRlbSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHVzZXJDYXJ0O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVtb3ZlQnlVc2VySWQodXNlcklkKTogUHJvbWlzZTxDYXJ0RW50aXR5PiB7XHJcbiAgICBjb25zdCB7IGNhcnQgfSA9IGF3YWl0IHRoaXMuZmluZEJ5VXNlcklkKHVzZXJJZCk7XHJcbiAgICByZXR1cm4gdGhpcy5DYXJ0UmVwb3NpdG9yeS5yZW1vdmUoY2FydCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=