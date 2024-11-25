"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cart_controller_1 = require("./cart.controller");
const order_module_1 = require("../order/order.module");
const services_1 = require("./services");
describe('CartController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [cart_controller_1.CartController],
            providers: [services_1.CartService],
            imports: [order_module_1.OrderModule]
        }).compile();
        controller = module.get(cart_controller_1.CartController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbnRyb2xsZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzRDtBQUN0RCx1REFBbUQ7QUFDbkQsd0RBQW9EO0FBQ3BELHlDQUF5QztBQUV6QyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQzlCLElBQUksVUFBMEIsQ0FBQztJQUUvQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDcEIsTUFBTSxNQUFNLEdBQWtCLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzNELFdBQVcsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsc0JBQVcsQ0FBQztZQUN4QixPQUFPLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFpQixnQ0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCwgVGVzdGluZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvdGVzdGluZyc7XG5pbXBvcnQgeyBDYXJ0Q29udHJvbGxlciB9IGZyb20gJy4vY2FydC5jb250cm9sbGVyJztcbmltcG9ydCB7IE9yZGVyTW9kdWxlIH0gZnJvbSAnLi4vb3JkZXIvb3JkZXIubW9kdWxlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbmRlc2NyaWJlKCdDYXJ0Q29udHJvbGxlcicsICgpID0+IHtcbiAgbGV0IGNvbnRyb2xsZXI6IENhcnRDb250cm9sbGVyO1xuXG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1vZHVsZTogVGVzdGluZ01vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG4gICAgICBjb250cm9sbGVyczogW0NhcnRDb250cm9sbGVyXSxcbiAgICAgIHByb3ZpZGVyczogW0NhcnRTZXJ2aWNlXSxcbiAgICAgIGltcG9ydHM6IFtPcmRlck1vZHVsZV1cbiAgICB9KS5jb21waWxlKCk7XG5cbiAgICBjb250cm9sbGVyID0gbW9kdWxlLmdldDxDYXJ0Q29udHJvbGxlcj4oQ2FydENvbnRyb2xsZXIpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbnRyb2xsZXIpLnRvQmVEZWZpbmVkKCk7XG4gIH0pO1xufSk7XG4iXX0=