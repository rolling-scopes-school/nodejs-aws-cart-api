"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const strategies_1 = require("./strategies");
const constants_1 = require("../constants");
const users_module_1 = require("../users/users.module");
const { secret, expiresIn } = constants_1.JWT_CONFIG;
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule, //.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({ secret, signOptions: { expiresIn } }),
        ],
        providers: [
            auth_service_1.AuthService,
            strategies_1.JwtStrategy,
            strategies_1.LocalStrategy,
            strategies_1.BasicStrategy,
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsK0NBQWtEO0FBQ2xELHFDQUF3QztBQUV4QyxpREFBNkM7QUFDN0MsNkNBQXlFO0FBRXpFLDRDQUEwQztBQUMxQyx3REFBb0Q7QUFFcEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxzQkFBVSxDQUFDO0FBZ0JsQyxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0NBQUcsQ0FBQTtBQUFiLGdDQUFVO3FCQUFWLFVBQVU7SUFkdEIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCwwQkFBVztZQUNYLHlCQUFjLEVBQUUsd0NBQXdDO1lBQ3hELGVBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQztTQUMzRDtRQUNELFNBQVMsRUFBRTtZQUNULDBCQUFXO1lBQ1gsd0JBQVc7WUFDWCwwQkFBYTtZQUNiLDBCQUFhO1NBQ2Q7UUFDRCxPQUFPLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO0tBQ3pCLENBQUM7R0FDVyxVQUFVLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IFBhc3Nwb3J0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XHJcbmltcG9ydCB7IEp3dE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvand0JztcclxuXHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNpY1N0cmF0ZWd5LCBKd3RTdHJhdGVneSwgTG9jYWxTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcyc7XHJcblxyXG5pbXBvcnQgeyBKV1RfQ09ORklHIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuLi91c2Vycy91c2Vycy5tb2R1bGUnO1xyXG5cclxuY29uc3QgeyBzZWNyZXQsIGV4cGlyZXNJbiB9ID0gSldUX0NPTkZJRztcclxuXHJcbkBNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFVzZXJzTW9kdWxlLFxyXG4gICAgUGFzc3BvcnRNb2R1bGUsIC8vLnJlZ2lzdGVyKHsgZGVmYXVsdFN0cmF0ZWd5OiAnand0JyB9KSxcclxuICAgIEp3dE1vZHVsZS5yZWdpc3Rlcih7IHNlY3JldCwgc2lnbk9wdGlvbnM6IHsgZXhwaXJlc0luIH0gfSksXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgSnd0U3RyYXRlZ3ksXHJcbiAgICBMb2NhbFN0cmF0ZWd5LFxyXG4gICAgQmFzaWNTdHJhdGVneSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFsgQXV0aFNlcnZpY2UgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cclxuIl19