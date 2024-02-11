"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const order_module_1 = require("../order/order.module");
const cart_controller_1 = require("./cart.controller");
const services_1 = require("./services");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("./entity/cart.entity");
const cart_item_entity_1 = require("./entity/cart-item.entity");
const user_entity_1 = require("src/users/entity/user.entity");
const product_entity_1 = require("./entity/product.entity");
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [order_module_1.OrderModule, typeorm_1.TypeOrmModule.forFeature([cart_entity_1.CartEntity, cart_item_entity_1.CartItemEntity, user_entity_1.UserEntity, product_entity_1.ProductEntity])],
        providers: [services_1.CartService],
        controllers: [cart_controller_1.CartController]
    })
], CartModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFFeEMsd0RBQW9EO0FBRXBELHVEQUFtRDtBQUNuRCx5Q0FBeUM7QUFDekMsNkNBQWdEO0FBQ2hELHNEQUFrRDtBQUNsRCxnRUFBMkQ7QUFDM0QsOERBQTBEO0FBQzFELDREQUF3RDtBQVNqRCxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0NBQUcsQ0FBQTtBQUFiLGdDQUFVO3FCQUFWLFVBQVU7SUFMdEIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsd0JBQVUsRUFBRSxpQ0FBYyxFQUFFLHdCQUFVLEVBQUUsOEJBQWEsQ0FBQyxDQUFDLENBQUU7UUFDM0csU0FBUyxFQUFFLENBQUUsc0JBQVcsQ0FBRTtRQUMxQixXQUFXLEVBQUUsQ0FBRSxnQ0FBYyxDQUFFO0tBQ2hDLENBQUM7R0FDVyxVQUFVLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBPcmRlck1vZHVsZSB9IGZyb20gJy4uL29yZGVyL29yZGVyLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDYXJ0Q29udHJvbGxlciB9IGZyb20gJy4vY2FydC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XHJcbmltcG9ydCB7IENhcnRFbnRpdHkgfSBmcm9tICcuL2VudGl0eS9jYXJ0LmVudGl0eSc7XHJcbmltcG9ydCB7IENhcnRJdGVtRW50aXR5IH0gZnJvbSAnLi9lbnRpdHkvY2FydC1pdGVtLmVudGl0eSc7XHJcbmltcG9ydCB7IFVzZXJFbnRpdHkgfSBmcm9tICdzcmMvdXNlcnMvZW50aXR5L3VzZXIuZW50aXR5JztcclxuaW1wb3J0IHsgUHJvZHVjdEVudGl0eSB9IGZyb20gJy4vZW50aXR5L3Byb2R1Y3QuZW50aXR5JztcclxuXHJcblxyXG5cclxuQE1vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBPcmRlck1vZHVsZSwgVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtDYXJ0RW50aXR5LCBDYXJ0SXRlbUVudGl0eSwgVXNlckVudGl0eSwgUHJvZHVjdEVudGl0eV0pIF0sXHJcbiAgcHJvdmlkZXJzOiBbIENhcnRTZXJ2aWNlIF0sXHJcbiAgY29udHJvbGxlcnM6IFsgQ2FydENvbnRyb2xsZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FydE1vZHVsZSB7fVxyXG4iXX0=