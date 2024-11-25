"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cart_service_1 = require("./cart.service");
describe('CartService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [cart_service_1.CartService],
        }).compile();
        service = module.get(cart_service_1.CartService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzRDtBQUN0RCxpREFBNkM7QUFFN0MsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxPQUFvQixDQUFDO0lBRXpCLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNwQixNQUFNLE1BQU0sR0FBa0IsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDM0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFYixPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBYywwQkFBVyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCwgVGVzdGluZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvdGVzdGluZyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4vY2FydC5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ0NhcnRTZXJ2aWNlJywgKCkgPT4ge1xuICBsZXQgc2VydmljZTogQ2FydFNlcnZpY2U7XG5cbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlOiBUZXN0aW5nTW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIHByb3ZpZGVyczogW0NhcnRTZXJ2aWNlXSxcbiAgICB9KS5jb21waWxlKCk7XG5cbiAgICBzZXJ2aWNlID0gbW9kdWxlLmdldDxDYXJ0U2VydmljZT4oQ2FydFNlcnZpY2UpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNlcnZpY2UpLnRvQmVEZWZpbmVkKCk7XG4gIH0pO1xufSk7XG4iXX0=