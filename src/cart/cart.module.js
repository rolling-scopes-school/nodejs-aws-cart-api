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
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [order_module_1.OrderModule],
        providers: [services_1.CartService],
        controllers: [cart_controller_1.CartController]
    })
], CartModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFFeEMsd0RBQW9EO0FBRXBELHVEQUFtRDtBQUNuRCx5Q0FBeUM7QUFRbEMsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQUFHLENBQUE7QUFBYixnQ0FBVTtxQkFBVixVQUFVO0lBTHRCLElBQUEsZUFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtRQUN4QixTQUFTLEVBQUUsQ0FBRSxzQkFBVyxDQUFFO1FBQzFCLFdBQVcsRUFBRSxDQUFFLGdDQUFjLENBQUU7S0FDaEMsQ0FBQztHQUNXLFVBQVUsQ0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgT3JkZXJNb2R1bGUgfSBmcm9tICcuLi9vcmRlci9vcmRlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDYXJ0Q29udHJvbGxlciB9IGZyb20gJy4vY2FydC5jb250cm9sbGVyJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFsgT3JkZXJNb2R1bGUgXSxcbiAgcHJvdmlkZXJzOiBbIENhcnRTZXJ2aWNlIF0sXG4gIGNvbnRyb2xsZXJzOiBbIENhcnRDb250cm9sbGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FydE1vZHVsZSB7fVxuIl19