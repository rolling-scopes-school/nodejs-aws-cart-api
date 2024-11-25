"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CartService = class CartService {
    constructor() {
        this.userCarts = {};
    }
    findByUserId(userId) {
        return this.userCarts[userId];
    }
    createByUserId(userId) {
        const id = (0, uuid_1.v4)();
        const userCart = {
            id,
            items: [],
        };
        this.userCarts[userId] = userCart;
        return userCart;
    }
    findOrCreateByUserId(userId) {
        const userCart = this.findByUserId(userId);
        if (userCart) {
            return userCart;
        }
        return this.createByUserId(userId);
    }
    updateByUserId(userId, { items }) {
        const { id, ...rest } = this.findOrCreateByUserId(userId);
        const updatedCart = {
            id,
            ...rest,
            items: [...items],
        };
        this.userCarts[userId] = { ...updatedCart };
        return { ...updatedCart };
    }
    removeByUserId(userId) {
        this.userCarts[userId] = null;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUU1QywrQkFBMEI7QUFLbkIsSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztJQUFqQjtRQUNHLGNBQVMsR0FBeUIsRUFBRSxDQUFDO0lBOEMvQyxDQUFDO0lBNUNDLFlBQVksQ0FBQyxNQUFjO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWM7UUFDM0IsTUFBTSxFQUFFLEdBQUcsSUFBQSxTQUFFLEdBQUUsQ0FBQztRQUNoQixNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUU7WUFDRixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBRSxHQUFHLFFBQVEsQ0FBQztRQUVwQyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBYztRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLElBQUksUUFBUSxFQUFFLENBQUM7WUFDYixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFRO1FBQzVDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUQsTUFBTSxXQUFXLEdBQUc7WUFDbEIsRUFBRTtZQUNGLEdBQUcsSUFBSTtZQUNQLEtBQUssRUFBRSxDQUFFLEdBQUcsS0FBSyxDQUFFO1NBQ3BCLENBQUE7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBRSxHQUFHLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUU5QyxPQUFPLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBRSxNQUFNLENBQUUsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztDQUVGLENBQUE7QUEvQ1ksa0NBQVc7c0JBQVgsV0FBVztJQUR2QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxXQUFXLENBK0N2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIHVzZXJDYXJ0czogUmVjb3JkPHN0cmluZywgQ2FydD4gPSB7fTtcblxuICBmaW5kQnlVc2VySWQodXNlcklkOiBzdHJpbmcpOiBDYXJ0IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQ2FydHNbIHVzZXJJZCBdO1xuICB9XG5cbiAgY3JlYXRlQnlVc2VySWQodXNlcklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpZCA9IHY0KCk7XG4gICAgY29uc3QgdXNlckNhcnQgPSB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy51c2VyQ2FydHNbIHVzZXJJZCBdID0gdXNlckNhcnQ7XG5cbiAgICByZXR1cm4gdXNlckNhcnQ7XG4gIH1cblxuICBmaW5kT3JDcmVhdGVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IENhcnQge1xuICAgIGNvbnN0IHVzZXJDYXJ0ID0gdGhpcy5maW5kQnlVc2VySWQodXNlcklkKTtcblxuICAgIGlmICh1c2VyQ2FydCkge1xuICAgICAgcmV0dXJuIHVzZXJDYXJ0O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUJ5VXNlcklkKHVzZXJJZCk7XG4gIH1cblxuICB1cGRhdGVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZywgeyBpdGVtcyB9OiBDYXJ0KTogQ2FydCB7XG4gICAgY29uc3QgeyBpZCwgLi4ucmVzdCB9ID0gdGhpcy5maW5kT3JDcmVhdGVCeVVzZXJJZCh1c2VySWQpO1xuXG4gICAgY29uc3QgdXBkYXRlZENhcnQgPSB7XG4gICAgICBpZCxcbiAgICAgIC4uLnJlc3QsXG4gICAgICBpdGVtczogWyAuLi5pdGVtcyBdLFxuICAgIH1cblxuICAgIHRoaXMudXNlckNhcnRzWyB1c2VySWQgXSA9IHsgLi4udXBkYXRlZENhcnQgfTtcblxuICAgIHJldHVybiB7IC4uLnVwZGF0ZWRDYXJ0IH07XG4gIH1cblxuICByZW1vdmVCeVVzZXJJZCh1c2VySWQpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDYXJ0c1sgdXNlcklkIF0gPSBudWxsO1xuICB9XG5cbn1cbiJdfQ==