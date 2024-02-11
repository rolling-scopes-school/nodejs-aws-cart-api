"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const cart_module_1 = require("./cart/cart.module");
const auth_module_1 = require("./auth/auth.module");
const order_module_1 = require("./order/order.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    autoLoadEntities: true,
                    synchronize: true
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBRXhDLHFEQUFpRDtBQUVqRCwyQ0FBNkQ7QUFFN0QsNkNBQWdEO0FBRWhELG9EQUFnRDtBQUNoRCxvREFBZ0Q7QUFDaEQsdURBQW1EO0FBQ25ELHVEQUFtRDtBQWdDNUMsSUFBTSxTQUFTLEdBQWYsTUFBTSxTQUFTO0NBQUcsQ0FBQTtBQUFaLDhCQUFTO29CQUFULFNBQVM7SUE3QnJCLElBQUEsZUFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AscUJBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQztZQUNGLDBCQUFXO1lBQ1gsd0JBQVU7WUFDVix3QkFBVTtZQUNWLDBCQUFXO1lBQ1gsdUJBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7Z0JBQ3ZCLFVBQVUsRUFBRSxLQUFLLEVBQUUsYUFBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFTLFNBQVMsQ0FBQztvQkFDMUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQVMsU0FBUyxDQUFDO29CQUMxQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBUyxhQUFhLENBQUM7b0JBQ2xELFFBQVEsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFTLGFBQWEsQ0FBQztvQkFDbEQsUUFBUSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQVMsU0FBUyxDQUFDO29CQUM5QyxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQztnQkFDRixNQUFNLEVBQUUsQ0FBQyxzQkFBYSxDQUFDO2FBQ3hCLENBQUM7U0FDSDtRQUNELFdBQVcsRUFBRTtZQUNYLDhCQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxTQUFTLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcclxuXHJcbmltcG9ydCB7IENhcnRNb2R1bGUgfSBmcm9tICcuL2NhcnQvY2FydC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9hdXRoL2F1dGgubW9kdWxlJztcclxuaW1wb3J0IHsgT3JkZXJNb2R1bGUgfSBmcm9tICcuL29yZGVyL29yZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi91c2Vycy91c2Vycy5tb2R1bGUnO1xyXG5cclxuXHJcbkBNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcclxuICAgICAgaXNHbG9iYWw6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIFVzZXJzTW9kdWxlLFxyXG4gICAgQXV0aE1vZHVsZSxcclxuICAgIENhcnRNb2R1bGUsXHJcbiAgICBPcmRlck1vZHVsZSxcclxuICAgIFR5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcclxuICAgICAgaW1wb3J0czogW0NvbmZpZ01vZHVsZV0sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6ICdwb3N0Z3JlcycsXHJcbiAgICAgICAgaG9zdDogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignREJfSE9TVCcpLFxyXG4gICAgICAgIHBvcnQ6IGNvbmZpZ1NlcnZpY2UuZ2V0PG51bWJlcj4oJ0RCX1BPUlQnKSxcclxuICAgICAgICB1c2VybmFtZTogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignREJfVVNFUk5BTUUnKSxcclxuICAgICAgICBwYXNzd29yZDogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignREJfUEFTU1dPUkQnKSxcclxuICAgICAgICBkYXRhYmFzZTogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignREJfTkFNRScpLFxyXG4gICAgICAgIGF1dG9Mb2FkRW50aXRpZXM6IHRydWUsXHJcbiAgICAgICAgc3luY2hyb25pemU6IHRydWVcclxuICAgICAgfSksXHJcbiAgICAgIGluamVjdDogW0NvbmZpZ1NlcnZpY2VdLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjb250cm9sbGVyczogW1xyXG4gICAgQXBwQ29udHJvbGxlcixcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19