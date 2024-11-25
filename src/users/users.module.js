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
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        providers: [services_1.UsersService],
        exports: [services_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUV4Qyx5Q0FBMEM7QUFNbkMsSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztDQUFHLENBQUE7QUFBZCxrQ0FBVztzQkFBWCxXQUFXO0lBSnZCLElBQUEsZUFBTSxFQUFDO1FBQ04sU0FBUyxFQUFFLENBQUUsdUJBQVksQ0FBRTtRQUMzQixPQUFPLEVBQUUsQ0FBRSx1QkFBWSxDQUFFO0tBQzFCLENBQUM7R0FDVyxXQUFXLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbIFVzZXJzU2VydmljZSBdLFxuICBleHBvcnRzOiBbIFVzZXJzU2VydmljZSBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIl19