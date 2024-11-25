"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_http_1 = require("passport-http");
let BasicStrategy = class BasicStrategy extends (0, passport_1.PassportStrategy)(passport_http_1.BasicStrategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, pass) {
        const user = this.authService.validateUser(username, pass);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const { password, ...result } = user;
        return result;
    }
};
exports.BasicStrategy = BasicStrategy;
exports.BasicStrategy = BasicStrategy = __decorate([
    (0, common_1.Injectable)()
], BasicStrategy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpYy5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBbUU7QUFDbkUsK0NBQW9EO0FBRXBELGlEQUEwRDtBQUtuRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFjLFNBQVEsSUFBQSwyQkFBZ0IsRUFBQyw2QkFBUSxDQUFDO0lBQzNELFlBQW9CLFdBQXdCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRFUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBZ0IsRUFBRSxJQUFZO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLElBQUksOEJBQXFCLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUVyQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxzQ0FBYTt3QkFBYixhQUFhO0lBRHpCLElBQUEsbUJBQVUsR0FBRTtHQUNBLGFBQWEsQ0FnQnpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVW5hdXRob3JpemVkRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuXG5pbXBvcnQgeyBCYXNpY1N0cmF0ZWd5IGFzIFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtaHR0cCc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2ljU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFN0cmF0ZWd5KSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3M6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UudmFsaWRhdGVVc2VyKHVzZXJuYW1lLCBwYXNzKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IFVuYXV0aG9yaXplZEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnJlc3VsdCB9ID0gdXNlcjtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==