"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const constants_1 = require("../../constants");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.JWT_CONFIG.secret,
        });
    }
    async validate(payload) {
        return {
            id: payload.sub,
            name: payload.username,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)()
], JwtStrategy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiand0LnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1QywrQ0FBb0Q7QUFFcEQsK0NBQW9EO0FBRXBELCtDQUE2QztBQUd0QyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFZLFNBQVEsSUFBQSwyQkFBZ0IsRUFBQyx1QkFBUSxDQUFDO0lBQ3pEO1FBQ0UsS0FBSyxDQUFDO1lBQ0osY0FBYyxFQUFFLHlCQUFVLENBQUMsMkJBQTJCLEVBQUU7WUFDeEQsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixXQUFXLEVBQUUsc0JBQVUsQ0FBQyxNQUFNO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQVk7UUFDekIsT0FBTztZQUNMLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRztZQUNmLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFmWSxrQ0FBVztzQkFBWCxXQUFXO0lBRHZCLElBQUEsbUJBQVUsR0FBRTtHQUNBLFdBQVcsQ0FldkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuXG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XG5cbmltcG9ydCB7IEpXVF9DT05GSUcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0U3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFN0cmF0ZWd5KSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgICAgaWdub3JlRXhwaXJhdGlvbjogZmFsc2UsXG4gICAgICBzZWNyZXRPcktleTogSldUX0NPTkZJRy5zZWNyZXQsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHBheWxvYWQuc3ViLFxuICAgICAgbmFtZTogcGF5bG9hZC51c2VybmFtZSxcbiAgICB9O1xuICB9XG59XG4iXX0=