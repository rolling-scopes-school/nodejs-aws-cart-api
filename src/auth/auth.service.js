"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(name, password) {
        const user = this.usersService.findOne(name);
        if (user) {
            return user;
        }
        return this.usersService.createOne({ name, password });
    }
    login(user, type) {
        const LOGIN_MAP = {
            jwt: this.loginJWT,
            basic: this.loginBasic,
            default: this.loginJWT,
        };
        const login = LOGIN_MAP[type];
        return login ? login(user) : LOGIN_MAP.default(user);
    }
    loginJWT(user) {
        const payload = { username: user.name, sub: user.id };
        return {
            token_type: 'Bearer',
            access_token: this.jwtService.sign(payload),
        };
    }
    loginBasic(user) {
        // const payload = { username: user.name, sub: user.id };
        console.log(user);
        function encodeUserToken(user) {
            const { id, name, password } = user;
            const buf = Buffer.from([name, password].join(':'), 'utf8');
            return buf.toString('base64');
        }
        return {
            token_type: 'Basic',
            access_token: encodeUserToken(user),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQU9yQyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBQ3RCLFlBQ1UsWUFBMEIsRUFDMUIsVUFBc0I7UUFEdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBRUosWUFBWSxDQUFDLElBQVksRUFBRSxRQUFnQjtRQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBVSxFQUFFLElBQUk7UUFDcEIsTUFBTSxTQUFTLEdBQUc7WUFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdkIsQ0FBQTtRQUNELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQTtRQUUvQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLE9BQU8sR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFdEQsT0FBTztZQUNMLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVTtRQUNuQix5REFBeUQ7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQixTQUFTLGVBQWUsQ0FBQyxJQUFJO1lBQzNCLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU1RCxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELE9BQU87WUFDTCxVQUFVLEVBQUUsT0FBTztZQUNuQixZQUFZLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQztTQUNwQyxDQUFDO0lBQ0osQ0FBQztDQUlGLENBQUE7QUF2RFksa0NBQVc7c0JBQVgsV0FBVztJQUR2QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxXQUFXLENBdUR2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlcnMvc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlcnMvbW9kZWxzJztcbmltcG9ydCB7IGNvbnRlbnRTZWN1cml0eVBvbGljeSB9IGZyb20gJ2hlbG1ldCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBqd3RTZXJ2aWNlOiBKd3RTZXJ2aWNlXG4gICkge31cblxuICB2YWxpZGF0ZVVzZXIobmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy51c2Vyc1NlcnZpY2UuZmluZE9uZShuYW1lKTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UuY3JlYXRlT25lKHsgbmFtZSwgcGFzc3dvcmQgfSlcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIsIHR5cGUpIHtcbiAgICBjb25zdCBMT0dJTl9NQVAgPSB7XG4gICAgICBqd3Q6IHRoaXMubG9naW5KV1QsXG4gICAgICBiYXNpYzogdGhpcy5sb2dpbkJhc2ljLFxuICAgICAgZGVmYXVsdDogdGhpcy5sb2dpbkpXVCxcbiAgICB9XG4gICAgY29uc3QgbG9naW4gPSBMT0dJTl9NQVBbIHR5cGUgXVxuXG4gICAgcmV0dXJuIGxvZ2luID8gbG9naW4odXNlcikgOiBMT0dJTl9NQVAuZGVmYXVsdCh1c2VyKTtcbiAgfVxuXG4gIGxvZ2luSldUKHVzZXI6IFVzZXIpIHtcbiAgICBjb25zdCBwYXlsb2FkID0geyB1c2VybmFtZTogdXNlci5uYW1lLCBzdWI6IHVzZXIuaWQgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b2tlbl90eXBlOiAnQmVhcmVyJyxcbiAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5qd3RTZXJ2aWNlLnNpZ24ocGF5bG9hZCksXG4gICAgfTtcbiAgfVxuXG4gIGxvZ2luQmFzaWModXNlcjogVXNlcikge1xuICAgIC8vIGNvbnN0IHBheWxvYWQgPSB7IHVzZXJuYW1lOiB1c2VyLm5hbWUsIHN1YjogdXNlci5pZCB9O1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgZnVuY3Rpb24gZW5jb2RlVXNlclRva2VuKHVzZXIpIHtcbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHBhc3N3b3JkIH0gPSB1c2VyO1xuICAgICAgY29uc3QgYnVmID0gQnVmZmVyLmZyb20oW25hbWUsIHBhc3N3b3JkXS5qb2luKCc6JyksICd1dGY4Jyk7XG5cbiAgICAgIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b2tlbl90eXBlOiAnQmFzaWMnLFxuICAgICAgYWNjZXNzX3Rva2VuOiBlbmNvZGVVc2VyVG9rZW4odXNlciksXG4gICAgfTtcbiAgfVxuXG5cblxufVxuIl19