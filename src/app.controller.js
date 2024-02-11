"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    healthCheck() {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
        };
    }
    // @UseGuards(LocalAuthGuard)
    async login(req) {
        const token = this.authService.login(req.user, 'basic');
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: {
                ...token,
            },
        };
    }
    // @UseGuards(BasicAuthGuard)
    async getProfile(req) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: {
                user: req.user,
            },
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(['', 'ping'])
], AppController.prototype, "healthCheck", null);
__decorate([
    (0, common_1.Post)('api/auth/login'),
    __param(0, (0, common_1.Request)())
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('api/profile'),
    __param(0, (0, common_1.Request)())
], AppController.prototype, "getProfile", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEU7QUFJckUsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtJQUV4QixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFHaEQsV0FBVztRQUNULE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCw2QkFBNkI7SUFFdkIsQUFBTixLQUFLLENBQUMsS0FBSyxDQUFZLEdBQUc7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RCxPQUFRO1lBQ04sVUFBVSxFQUFFLG1CQUFVLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRTtnQkFDSixHQUFHLEtBQUs7YUFDVDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsNkJBQTZCO0lBRXZCLEFBQU4sS0FBSyxDQUFDLFVBQVUsQ0FBWSxHQUFHO1FBQzdCLE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTthQUNmO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBckNZLHNDQUFhO0FBS3hCO0lBREMsSUFBQSxZQUFHLEVBQUMsQ0FBRSxFQUFFLEVBQUUsTUFBTSxDQUFFLENBQUM7Z0RBTW5CO0FBSUs7SUFETCxJQUFBLGFBQUksRUFBQyxnQkFBZ0IsQ0FBQztJQUNWLFdBQUEsSUFBQSxnQkFBTyxHQUFFLENBQUE7MENBVXJCO0FBSUs7SUFETCxJQUFBLFlBQUcsRUFBQyxhQUFhLENBQUM7SUFDRCxXQUFBLElBQUEsZ0JBQU8sR0FBRSxDQUFBOytDQVExQjt3QkFwQ1UsYUFBYTtJQUR6QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxhQUFhLENBcUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUmVxdWVzdCwgUG9zdCwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuQENvbnRyb2xsZXIoKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KFsgJycsICdwaW5nJyBdKVxyXG4gIGhlYWx0aENoZWNrKCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXNDb2RlOiBIdHRwU3RhdHVzLk9LLFxyXG4gICAgICBtZXNzYWdlOiAnT0snLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEBVc2VHdWFyZHMoTG9jYWxBdXRoR3VhcmQpXHJcbiAgQFBvc3QoJ2FwaS9hdXRoL2xvZ2luJylcclxuICBhc3luYyBsb2dpbihAUmVxdWVzdCgpIHJlcSkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHJlcS51c2VyLCAnYmFzaWMnKTtcclxuXHJcbiAgICByZXR1cm4gIHtcclxuICAgICAgc3RhdHVzQ29kZTogSHR0cFN0YXR1cy5PSyxcclxuICAgICAgbWVzc2FnZTogJ09LJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXHJcbiAgQEdldCgnYXBpL3Byb2ZpbGUnKVxyXG4gIGFzeW5jIGdldFByb2ZpbGUoQFJlcXVlc3QoKSByZXEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IEh0dHBTdGF0dXMuT0ssXHJcbiAgICAgIG1lc3NhZ2U6ICdPSycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VyOiByZXEudXNlcixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==