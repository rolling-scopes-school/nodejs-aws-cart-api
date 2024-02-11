"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let OrderService = class OrderService {
    constructor() {
        this.orders = {};
    }
    findById(orderId) {
        return this.orders[orderId];
    }
    create(data) {
        const id = (0, uuid_1.v4)();
        const order = {
            ...data,
            id,
            status: 'inProgress',
        };
        this.orders[id] = order;
        return order;
    }
    update(orderId, data) {
        const order = this.findById(orderId);
        if (!order) {
            throw new Error('Order does not exist.');
        }
        this.orders[orderId] = {
            ...data,
            id: orderId,
        };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLCtCQUEwQjtBQUtuQixJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0lBQWxCO1FBQ0csV0FBTSxHQUEwQixFQUFFLENBQUE7SUErQjVDLENBQUM7SUE3QkMsUUFBUSxDQUFDLE9BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBUztRQUNkLE1BQU0sRUFBRSxHQUFHLElBQUEsU0FBRSxHQUFFLENBQUE7UUFDZixNQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsSUFBSTtZQUNQLEVBQUU7WUFDRixNQUFNLEVBQUUsWUFBWTtTQUNyQixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxLQUFLLENBQUM7UUFFMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJO1FBQ2xCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBRSxHQUFHO1lBQ3ZCLEdBQUcsSUFBSTtZQUNQLEVBQUUsRUFBRSxPQUFPO1NBQ1osQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFBO0FBaENZLG9DQUFZO3VCQUFaLFlBQVk7SUFEeEIsSUFBQSxtQkFBVSxHQUFFO0dBQ0EsWUFBWSxDQWdDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIG9yZGVyczogUmVjb3JkPHN0cmluZywgT3JkZXI+ID0ge31cclxuXHJcbiAgZmluZEJ5SWQob3JkZXJJZDogc3RyaW5nKTogT3JkZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub3JkZXJzWyBvcmRlcklkIF07XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBpZCA9IHY0KClcclxuICAgIGNvbnN0IG9yZGVyID0ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBpZCxcclxuICAgICAgc3RhdHVzOiAnaW5Qcm9ncmVzcycsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub3JkZXJzWyBpZCBdID0gb3JkZXI7XHJcblxyXG4gICAgcmV0dXJuIG9yZGVyO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKG9yZGVySWQsIGRhdGEpIHtcclxuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5maW5kQnlJZChvcmRlcklkKTtcclxuXHJcbiAgICBpZiAoIW9yZGVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3JkZXIgZG9lcyBub3QgZXhpc3QuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcmRlcnNbIG9yZGVySWQgXSA9IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaWQ6IG9yZGVySWQsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==