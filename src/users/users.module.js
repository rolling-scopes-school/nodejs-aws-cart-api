"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("./services");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        providers: [services_1.UsersService],
        exports: [services_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUV4Qyx5Q0FBMEM7QUFDMUMsNkNBQWdEO0FBQ2hELHNEQUFrRDtBQU8zQyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0NBQUcsQ0FBQTtBQUFkLGtDQUFXO3NCQUFYLFdBQVc7SUFMdkIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHdCQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pELFNBQVMsRUFBRSxDQUFFLHVCQUFZLENBQUU7UUFDM0IsT0FBTyxFQUFFLENBQUUsdUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1csV0FBVyxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBVc2VyRW50aXR5IH0gZnJvbSAnLi9lbnRpdHkvdXNlci5lbnRpdHknO1xyXG5cclxuQE1vZHVsZSh7XHJcbiAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbVXNlckVudGl0eV0pXSxcclxuICBwcm92aWRlcnM6IFsgVXNlcnNTZXJ2aWNlIF0sXHJcbiAgZXhwb3J0czogWyBVc2Vyc1NlcnZpY2UgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJzTW9kdWxlIHt9XHJcbiJdfQ==