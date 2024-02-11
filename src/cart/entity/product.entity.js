"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
let ProductEntity = class ProductEntity {
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' })
], ProductEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' })
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' })
], ProductEntity.prototype, "price", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product' })
], ProductEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQ0FBaUU7QUFJMUQsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtDQWF6QixDQUFBO0FBYlksc0NBQWE7QUFHdEI7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzt5Q0FDcEI7QUFHWDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs0Q0FDZDtBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO2tEQUNSO0FBR3BCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzRDQUNkO3dCQVpMLGFBQWE7SUFEekIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO0dBQ2YsYUFBYSxDQWF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcblxyXG5ARW50aXR5KHsgbmFtZTogJ3Byb2R1Y3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RW50aXR5IHtcclxuXHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiAndmFyY2hhcicgfSlcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6ICd2YXJjaGFyJyB9KVxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogJ2RlY2ltYWwnIH0pXHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG59Il19