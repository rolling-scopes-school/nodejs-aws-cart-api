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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQU9yQyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBQ3RCLFlBQ1UsWUFBMEIsRUFDMUIsVUFBc0I7UUFEdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBRUosWUFBWSxDQUFDLElBQVksRUFBRSxRQUFnQjtRQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBVSxFQUFFLElBQUk7UUFDcEIsTUFBTSxTQUFTLEdBQUc7WUFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdkIsQ0FBQTtRQUNELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQTtRQUUvQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLE9BQU8sR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFdEQsT0FBTztZQUNMLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVTtRQUNuQix5REFBeUQ7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQixTQUFTLGVBQWUsQ0FBQyxJQUFJO1lBQzNCLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU1RCxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELE9BQU87WUFDTCxVQUFVLEVBQUUsT0FBTztZQUNuQixZQUFZLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQztTQUNwQyxDQUFDO0lBQ0osQ0FBQztDQUlGLENBQUE7QUF2RFksa0NBQVc7c0JBQVgsV0FBVztJQUR2QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxXQUFXLENBdUR2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XHJcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlcnMvbW9kZWxzJztcclxuaW1wb3J0IHsgY29udGVudFNlY3VyaXR5UG9saWN5IH0gZnJvbSAnaGVsbWV0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGp3dFNlcnZpY2U6IEp3dFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHZhbGlkYXRlVXNlcihuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMudXNlcnNTZXJ2aWNlLmZpbmRPbmUobmFtZSk7XHJcblxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmNyZWF0ZU9uZSh7IG5hbWUsIHBhc3N3b3JkIH0pXHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyLCB0eXBlKSB7XHJcbiAgICBjb25zdCBMT0dJTl9NQVAgPSB7XHJcbiAgICAgIGp3dDogdGhpcy5sb2dpbkpXVCxcclxuICAgICAgYmFzaWM6IHRoaXMubG9naW5CYXNpYyxcclxuICAgICAgZGVmYXVsdDogdGhpcy5sb2dpbkpXVCxcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2luID0gTE9HSU5fTUFQWyB0eXBlIF1cclxuXHJcbiAgICByZXR1cm4gbG9naW4gPyBsb2dpbih1c2VyKSA6IExPR0lOX01BUC5kZWZhdWx0KHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5KV1QodXNlcjogVXNlcikge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHsgdXNlcm5hbWU6IHVzZXIubmFtZSwgc3ViOiB1c2VyLmlkIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9rZW5fdHlwZTogJ0JlYXJlcicsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5qd3RTZXJ2aWNlLnNpZ24ocGF5bG9hZCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9naW5CYXNpYyh1c2VyOiBVc2VyKSB7XHJcbiAgICAvLyBjb25zdCBwYXlsb2FkID0geyB1c2VybmFtZTogdXNlci5uYW1lLCBzdWI6IHVzZXIuaWQgfTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGVuY29kZVVzZXJUb2tlbih1c2VyKSB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHBhc3N3b3JkIH0gPSB1c2VyO1xyXG4gICAgICBjb25zdCBidWYgPSBCdWZmZXIuZnJvbShbbmFtZSwgcGFzc3dvcmRdLmpvaW4oJzonKSwgJ3V0ZjgnKTtcclxuXHJcbiAgICAgIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRva2VuX3R5cGU6ICdCYXNpYycsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogZW5jb2RlVXNlclRva2VuKHVzZXIpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19