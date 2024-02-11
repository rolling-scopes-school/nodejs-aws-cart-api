"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemEntity = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("./cart.entity");
const product_entity_1 = require("./product.entity");
let CartItemEntity = class CartItemEntity {
};
exports.CartItemEntity = CartItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], CartItemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_entity_1.CartEntity, (cart) => cart.id),
    (0, typeorm_1.JoinColumn)({ name: 'cart_id' })
], CartItemEntity.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' })
], CartItemEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' })
], CartItemEntity.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.id),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' })
], CartItemEntity.prototype, "product", void 0);
exports.CartItemEntity = CartItemEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'cart_items' })
], CartItemEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUNBQXdGO0FBQ3hGLCtDQUEyQztBQUMzQyxxREFBaUQ7QUFJMUMsSUFBTSxjQUFjLEdBQXBCLE1BQU0sY0FBYztDQWlCMUIsQ0FBQTtBQWpCWSx3Q0FBYztBQUV2QjtJQURDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOzBDQUNwQjtBQUlYO0lBRkMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUMsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzRDQUNmO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2tEQUNQO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzZDQUNmO0FBSWI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsOEJBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUN2RCxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7K0NBQ2I7eUJBaEJiLGNBQWM7SUFEMUIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDO0dBQ2xCLGNBQWMsQ0FpQjFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIEpvaW5Db2x1bW4sIE1hbnlUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IENhcnRFbnRpdHkgfSBmcm9tIFwiLi9jYXJ0LmVudGl0eVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0RW50aXR5IH0gZnJvbSBcIi4vcHJvZHVjdC5lbnRpdHlcIjtcclxuXHJcblxyXG5ARW50aXR5KHsgbmFtZTogJ2NhcnRfaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUVudGl0eSB7XHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBNYW55VG9PbmUoKCkgPT4gQ2FydEVudGl0eSwgKGNhcnQpID0+IGNhcnQuaWQpXHJcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6ICdjYXJ0X2lkJyB9KVxyXG4gICAgY2FydDogQ2FydEVudGl0eTtcclxuICAgIFxyXG4gICAgQENvbHVtbih7IHR5cGU6ICd1dWlkJyB9KVxyXG4gICAgcHJvZHVjdF9pZDogc3RyaW5nXHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6ICdpbnRlZ2VyJyB9KVxyXG4gICAgY291bnQ6IG51bWJlclxyXG5cclxuICAgIEBNYW55VG9PbmUoKCkgPT4gUHJvZHVjdEVudGl0eSwgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpXHJcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6ICdwcm9kdWN0X2lkJyB9KVxyXG4gICAgcHJvZHVjdDogUHJvZHVjdEVudGl0eVxyXG59Il19