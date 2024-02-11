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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiand0LnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1QywrQ0FBb0Q7QUFFcEQsK0NBQW9EO0FBRXBELCtDQUE2QztBQUd0QyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFZLFNBQVEsSUFBQSwyQkFBZ0IsRUFBQyx1QkFBUSxDQUFDO0lBQ3pEO1FBQ0UsS0FBSyxDQUFDO1lBQ0osY0FBYyxFQUFFLHlCQUFVLENBQUMsMkJBQTJCLEVBQUU7WUFDeEQsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixXQUFXLEVBQUUsc0JBQVUsQ0FBQyxNQUFNO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQVk7UUFDekIsT0FBTztZQUNMLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRztZQUNmLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFmWSxrQ0FBVztzQkFBWCxXQUFXO0lBRHZCLElBQUEsbUJBQVUsR0FBRTtHQUNBLFdBQVcsQ0FldkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XHJcblxyXG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XHJcblxyXG5pbXBvcnQgeyBKV1RfQ09ORklHIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEp3dFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBqd3RGcm9tUmVxdWVzdDogRXh0cmFjdEp3dC5mcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4oKSxcclxuICAgICAgaWdub3JlRXhwaXJhdGlvbjogZmFsc2UsXHJcbiAgICAgIHNlY3JldE9yS2V5OiBKV1RfQ09ORklHLnNlY3JldCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdmFsaWRhdGUocGF5bG9hZDogYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcGF5bG9hZC5zdWIsXHJcbiAgICAgIG5hbWU6IHBheWxvYWQudXNlcm5hbWUsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=