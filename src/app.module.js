"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const cart_module_1 = require("./cart/cart.module");
const auth_module_1 = require("./auth/auth.module");
const order_module_1 = require("./order/order.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBRXhDLHFEQUFpRDtBQUVqRCxvREFBZ0Q7QUFDaEQsb0RBQWdEO0FBQ2hELHVEQUFtRDtBQWE1QyxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVM7Q0FBRyxDQUFBO0FBQVosOEJBQVM7b0JBQVQsU0FBUztJQVhyQixJQUFBLGVBQU0sRUFBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHdCQUFVO1lBQ1Ysd0JBQVU7WUFDViwwQkFBVztTQUNaO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsOEJBQWE7U0FDZDtRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFNBQVMsQ0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBDYXJ0TW9kdWxlIH0gZnJvbSAnLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJNb2R1bGUgfSBmcm9tICcuL29yZGVyL29yZGVyLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXV0aE1vZHVsZSxcbiAgICBDYXJ0TW9kdWxlLFxuICAgIE9yZGVyTW9kdWxlLFxuICBdLFxuICBjb250cm9sbGVyczogW1xuICAgIEFwcENvbnRyb2xsZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19