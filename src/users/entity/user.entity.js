"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], UserEntity.prototype, "password", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' })
], UserEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQ0FBaUU7QUFJMUQsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQWN0QixDQUFBO0FBZFksZ0NBQVU7QUFHbkI7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQztzQ0FDcEI7QUFHWDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO3dDQUMvQjtBQUdiO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7eUNBQzlCO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs0Q0FDNUI7cUJBWlAsVUFBVTtJQUR0QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDWixVQUFVLENBY3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuXHJcbkBFbnRpdHkoeyBuYW1lOiAndXNlcicgfSlcclxuZXhwb3J0IGNsYXNzIFVzZXJFbnRpdHkge1xyXG5cclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKCd1dWlkJylcclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6ICd2YXJjaGFyJywgbnVsbGFibGU6IHRydWUgfSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogJ3ZhcmNoYXInLCBudWxsYWJsZTogdHJ1ZSB9KVxyXG4gICAgZW1haWw6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogJ3ZhcmNoYXInLCBudWxsYWJsZTogdHJ1ZSB9KVxyXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG5cclxufSJdfQ==