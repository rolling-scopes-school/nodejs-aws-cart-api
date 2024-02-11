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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpYy5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBbUU7QUFDbkUsK0NBQW9EO0FBRXBELGlEQUEwRDtBQUtuRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFjLFNBQVEsSUFBQSwyQkFBZ0IsRUFBQyw2QkFBUSxDQUFDO0lBQzNELFlBQW9CLFdBQXdCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRFUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBZ0IsRUFBRSxJQUFZO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLElBQUksOEJBQXFCLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUVyQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxzQ0FBYTt3QkFBYixhQUFhO0lBRHpCLElBQUEsbUJBQVUsR0FBRTtHQUNBLGFBQWEsQ0FnQnpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVW5hdXRob3JpemVkRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XHJcblxyXG5pbXBvcnQgeyBCYXNpY1N0cmF0ZWd5IGFzIFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1N0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzczogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLnZhbGlkYXRlVXNlcih1c2VybmFtZSwgcGFzcyk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHBhc3N3b3JkLCAuLi5yZXN1bHQgfSA9IHVzZXI7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19