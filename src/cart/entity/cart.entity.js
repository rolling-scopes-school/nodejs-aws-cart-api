"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const user_entity_1 = require("src/users/entity/user.entity");
const typeorm_1 = require("typeorm");
let CartEntity = class CartEntity {
};
exports.CartEntity = CartEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid' })
], CartEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'uuid', nullable: true })
], CartEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'date', nullable: true })
], CartEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'date', nullable: true })
], CartEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['OPEN', 'ORDERED'], default: 'OPEN' })
], CartEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' })
], CartEntity.prototype, "user", void 0);
exports.CartEntity = CartEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'carts' })
], CartEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4REFBMEQ7QUFDMUQscUNBQStFO0FBSXhFLElBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVU7Q0FvQnRCLENBQUE7QUFwQlksZ0NBQVU7QUFHbkI7SUFEQyxJQUFBLHVCQUFhLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7c0NBQ3RCO0FBR1Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzBDQUM1QztBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs2Q0FDOUM7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7NkNBQzlDO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7MENBQ3ZEO0FBSWQ7SUFGQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsd0JBQVUsQ0FBQztJQUMzQixJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7d0NBQ2hCO3FCQW5CUCxVQUFVO0lBRHRCLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztHQUNiLFVBQVUsQ0FvQnRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckVudGl0eSB9IGZyb20gXCJzcmMvdXNlcnMvZW50aXR5L3VzZXIuZW50aXR5XCI7XHJcbmltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIFByaW1hcnlDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuXHJcbkBFbnRpdHkoeyBuYW1lOiAnY2FydHMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDYXJ0RW50aXR5IHtcclxuXHJcbiAgICBAUHJpbWFyeUNvbHVtbih7IHR5cGU6ICd1dWlkJyB9KVxyXG4gICAgaWQ6IHN0cmluZ1xyXG5cclxuICAgIEBDb2x1bW4oeyBuYW1lOiAndXNlcl9pZCcsIHR5cGU6ICd1dWlkJywgbnVsbGFibGU6IHRydWUgfSlcclxuICAgIHVzZXJJZDogc3RyaW5nXHJcblxyXG4gICAgQENvbHVtbih7IG5hbWU6ICdjcmVhdGVkX2F0JywgdHlwZTogJ2RhdGUnLCBudWxsYWJsZTogdHJ1ZSB9KVxyXG4gICAgY3JlYXRlZEF0OiBEYXRlXHJcblxyXG4gICAgQENvbHVtbih7IG5hbWU6ICd1cGRhdGVkX2F0JywgdHlwZTogJ2RhdGUnLCBudWxsYWJsZTogdHJ1ZSB9KVxyXG4gICAgdXBkYXRlZEF0OiBEYXRlXHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6ICdlbnVtJywgZW51bTogWydPUEVOJywgJ09SREVSRUQnXSwgZGVmYXVsdDogJ09QRU4nIH0pXHJcbiAgICBzdGF0dXM6IHN0cmluZ1xyXG5cclxuICAgIEBNYW55VG9PbmUoKCkgPT4gVXNlckVudGl0eSlcclxuICAgIEBKb2luQ29sdW1uKHsgbmFtZTogJ3VzZXJfaWQnIH0pXHJcbiAgICB1c2VyOiBVc2VyRW50aXR5XHJcbn0iXX0=