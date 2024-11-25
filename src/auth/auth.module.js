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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsK0NBQWtEO0FBQ2xELHFDQUF3QztBQUV4QyxpREFBNkM7QUFDN0MsNkNBQXlFO0FBRXpFLDRDQUEwQztBQUMxQyx3REFBb0Q7QUFFcEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxzQkFBVSxDQUFDO0FBZ0JsQyxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0NBQUcsQ0FBQTtBQUFiLGdDQUFVO3FCQUFWLFVBQVU7SUFkdEIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCwwQkFBVztZQUNYLHlCQUFjLEVBQUUsd0NBQXdDO1lBQ3hELGVBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQztTQUMzRDtRQUNELFNBQVMsRUFBRTtZQUNULDBCQUFXO1lBQ1gsd0JBQVc7WUFDWCwwQkFBYTtZQUNiLDBCQUFhO1NBQ2Q7UUFDRCxPQUFPLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO0tBQ3pCLENBQUM7R0FDVyxVQUFVLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQYXNzcG9ydE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgSnd0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2ljU3RyYXRlZ3ksIEp3dFN0cmF0ZWd5LCBMb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzJztcblxuaW1wb3J0IHsgSldUX0NPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBVc2Vyc01vZHVsZSB9IGZyb20gJy4uL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5cbmNvbnN0IHsgc2VjcmV0LCBleHBpcmVzSW4gfSA9IEpXVF9DT05GSUc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVXNlcnNNb2R1bGUsXG4gICAgUGFzc3BvcnRNb2R1bGUsIC8vLnJlZ2lzdGVyKHsgZGVmYXVsdFN0cmF0ZWd5OiAnand0JyB9KSxcbiAgICBKd3RNb2R1bGUucmVnaXN0ZXIoeyBzZWNyZXQsIHNpZ25PcHRpb25zOiB7IGV4cGlyZXNJbiB9IH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoU2VydmljZSxcbiAgICBKd3RTdHJhdGVneSxcbiAgICBMb2NhbFN0cmF0ZWd5LFxuICAgIEJhc2ljU3RyYXRlZ3ksXG4gIF0sXG4gIGV4cG9ydHM6IFsgQXV0aFNlcnZpY2UgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7fVxuIl19