"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_controller_1 = require("./app.controller");
const auth_module_1 = require("./auth/auth.module");
describe('AppController', () => {
    let appController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            imports: [auth_module_1.AuthModule],
            providers: [],
        }).compile();
        appController = app.get(app_controller_1.AppController);
    });
    describe('root', () => {
        it('healthCheck should be trythy', () => {
            expect(appController.healthCheck()).toBeTruthy();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbnRyb2xsZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb250cm9sbGVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBc0Q7QUFDdEQscURBQWlEO0FBQ2pELG9EQUFnRDtBQUVoRCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUM3QixJQUFJLGFBQTRCLENBQUM7SUFFakMsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxHQUFrQixNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RCxXQUFXLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDLHdCQUFVLENBQUM7WUFDckIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFYixhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBZ0IsOEJBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDcEIsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtZQUN0QyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCwgVGVzdGluZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvdGVzdGluZyc7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9hdXRoL2F1dGgubW9kdWxlJztcblxuZGVzY3JpYmUoJ0FwcENvbnRyb2xsZXInLCAoKSA9PiB7XG4gIGxldCBhcHBDb250cm9sbGVyOiBBcHBDb250cm9sbGVyO1xuXG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFwcDogVGVzdGluZ01vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG4gICAgICBjb250cm9sbGVyczogW0FwcENvbnRyb2xsZXJdLFxuICAgICAgaW1wb3J0czogW0F1dGhNb2R1bGVdLFxuICAgICAgcHJvdmlkZXJzOiBbXSxcbiAgICB9KS5jb21waWxlKCk7XG5cbiAgICBhcHBDb250cm9sbGVyID0gYXBwLmdldDxBcHBDb250cm9sbGVyPihBcHBDb250cm9sbGVyKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Jvb3QnLCAoKSA9PiB7XG4gICAgaXQoJ2hlYWx0aENoZWNrIHNob3VsZCBiZSB0cnl0aHknLCAoKSA9PiB7XG4gICAgICBleHBlY3QoYXBwQ29udHJvbGxlci5oZWFsdGhDaGVjaygpKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=