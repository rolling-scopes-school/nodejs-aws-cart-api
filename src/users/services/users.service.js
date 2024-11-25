"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.users = {};
    }
    findOne(userId) {
        return this.users[userId];
    }
    createOne({ name, password }) {
        const id = (0, uuid_1.v4)();
        const newUser = { id: name || id, name, password };
        this.users[id] = newUser;
        return newUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBRTVDLCtCQUEwQjtBQUtuQixJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0lBR3ZCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBUTtRQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFBLFNBQUUsR0FBRSxDQUFDO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxLQUFLLENBQUUsRUFBRSxDQUFFLEdBQUcsT0FBTyxDQUFDO1FBRTNCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FFRixDQUFBO0FBcEJZLG9DQUFZO3VCQUFaLFlBQVk7SUFEeEIsSUFBQSxtQkFBVSxHQUFFO0dBQ0EsWUFBWSxDQW9CeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdXNlcnM6IFJlY29yZDxzdHJpbmcsIFVzZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlcnMgPSB7fVxuICB9XG5cbiAgZmluZE9uZSh1c2VySWQ6IHN0cmluZyk6IFVzZXIge1xuICAgIHJldHVybiB0aGlzLnVzZXJzWyB1c2VySWQgXTtcbiAgfVxuXG4gIGNyZWF0ZU9uZSh7IG5hbWUsIHBhc3N3b3JkIH06IFVzZXIpOiBVc2VyIHtcbiAgICBjb25zdCBpZCA9IHY0KCk7XG4gICAgY29uc3QgbmV3VXNlciA9IHsgaWQ6IG5hbWUgfHwgaWQsIG5hbWUsIHBhc3N3b3JkIH07XG5cbiAgICB0aGlzLnVzZXJzWyBpZCBdID0gbmV3VXNlcjtcblxuICAgIHJldHVybiBuZXdVc2VyO1xuICB9XG5cbn1cbiJdfQ==