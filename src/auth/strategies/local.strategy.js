"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, password) {
        const user = this.authService.validateUser(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)()
], LocalStrategy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhbC5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBbUU7QUFDbkUsK0NBQW9EO0FBRXBELG1EQUEwQztBQUtuQyxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFjLFNBQVEsSUFBQSwyQkFBZ0IsRUFBQyx5QkFBUSxDQUFDO0lBQzNELFlBQW9CLFdBQXdCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRFUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxJQUFJLDhCQUFxQixFQUFFLENBQUM7UUFDcEMsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFkWSxzQ0FBYTt3QkFBYixhQUFhO0lBRHpCLElBQUEsbUJBQVUsR0FBRTtHQUNBLGFBQWEsQ0FjekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBVbmF1dGhvcml6ZWRFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcclxuXHJcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xyXG5cclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJhdGVneSBleHRlbmRzIFBhc3Nwb3J0U3RyYXRlZ3koU3RyYXRlZ3kpIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHZhbGlkYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UudmFsaWRhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9XHJcbn1cclxuIl19