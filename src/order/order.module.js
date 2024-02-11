"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("./services");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        providers: [services_1.OrderService],
        exports: [services_1.OrderService]
    })
], OrderModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4Qyx5Q0FBMEM7QUFNbkMsSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztDQUFHLENBQUE7QUFBZCxrQ0FBVztzQkFBWCxXQUFXO0lBSnZCLElBQUEsZUFBTSxFQUFDO1FBQ04sU0FBUyxFQUFFLENBQUUsdUJBQVksQ0FBRTtRQUMzQixPQUFPLEVBQUUsQ0FBRSx1QkFBWSxDQUFFO0tBQzFCLENBQUM7R0FDVyxXQUFXLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5cclxuQE1vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbIE9yZGVyU2VydmljZSBdLFxyXG4gIGV4cG9ydHM6IFsgT3JkZXJTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVyTW9kdWxlIHt9XHJcbiJdfQ==