"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
let UsersService = class UsersService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async findOne(userId) {
        return this.UserRepository.findOne({
            where: {
                id: userId
            }
        });
    }
    async createOne({ name, password }) {
        const id = (0, uuid_1.v4)();
        const newUser = { id: name || id, name, password };
        return this.UserRepository.save(newUser);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity))
], UsersService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBRTVDLCtCQUEwQjtBQUcxQiw2Q0FBbUQ7QUFDbkQsdURBQW1EO0FBSTVDLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQVk7SUFDdkIsWUFFVSxjQUFzQztRQUF0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7SUFDN0MsQ0FBQztJQUVKLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ2pDLEtBQUssRUFBRTtnQkFDTCxFQUFFLEVBQUUsTUFBTTthQUNYO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFRO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLElBQUEsU0FBRSxHQUFFLENBQUM7UUFDaEIsTUFBTSxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBRUYsQ0FBQTtBQXJCWSxvQ0FBWTt1QkFBWixZQUFZO0lBRHhCLElBQUEsbUJBQVUsR0FBRTtJQUdSLFdBQUEsSUFBQSwwQkFBZ0IsRUFBQyx3QkFBVSxDQUFDLENBQUE7R0FGcEIsWUFBWSxDQXFCeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcclxuaW1wb3J0IHsgVXNlckVudGl0eSB9IGZyb20gJy4uL2VudGl0eS91c2VyLmVudGl0eSc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0UmVwb3NpdG9yeShVc2VyRW50aXR5KVxyXG4gICAgcHJpdmF0ZSBVc2VyUmVwb3NpdG9yeTogUmVwb3NpdG9yeTxVc2VyRW50aXR5PlxyXG4gICkge31cclxuXHJcbiAgYXN5bmMgZmluZE9uZSh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8VXNlckVudGl0eT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuVXNlclJlcG9zaXRvcnkuZmluZE9uZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZU9uZSh7IG5hbWUsIHBhc3N3b3JkIH06IFVzZXIpOiBQcm9taXNlPFVzZXJFbnRpdHk+IHtcclxuICAgIGNvbnN0IGlkID0gdjQoKTtcclxuICAgIGNvbnN0IG5ld1VzZXIgPSB7IGlkOiBuYW1lIHx8IGlkLCBuYW1lLCBwYXNzd29yZCB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLlVzZXJSZXBvc2l0b3J5LnNhdmUobmV3VXNlcik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=