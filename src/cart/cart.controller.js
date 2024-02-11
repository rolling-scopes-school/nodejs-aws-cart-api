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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("../shared");
const models_rules_1 = require("./models-rules");
let CartController = class CartController {
    constructor(cartService, orderService) {
        this.cartService = cartService;
        this.orderService = orderService;
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    async findUserCart(req) {
        const { cart, items } = await this.cartService.findOrCreateByUserId((0, shared_1.getUserIdFromRequest)(req));
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: { cart, total: (0, models_rules_1.calculateCartTotal)(items) },
        };
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    async updateUserCart(req, body) {
        const { cart, items } = await this.cartService.updateByUserId((0, shared_1.getUserIdFromRequest)(req), body);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: {
                cart,
                total: (0, models_rules_1.calculateCartTotal)(items),
            }
        };
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    async clearUserCart(req) {
        await this.cartService.removeByUserId((0, shared_1.getUserIdFromRequest)(req));
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
        };
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    async checkout(req, body) {
        const userId = (0, shared_1.getUserIdFromRequest)(req);
        const { cart, items } = await this.cartService.findByUserId(userId);
        if (!cart) {
            const statusCode = common_1.HttpStatus.BAD_REQUEST;
            req.statusCode = statusCode;
            return {
                statusCode,
                message: 'Cart is empty',
            };
        }
        const total = (0, models_rules_1.calculateCartTotal)(items);
        const order = this.orderService.create({
            ...body, // TODO: validate and pick only necessary data
            userId,
            cartId: cart.id,
            items,
            total,
        });
        this.cartService.removeByUserId(userId);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: { order }
        };
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)())
], CartController.prototype, "findUserCart", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)())
], CartController.prototype, "updateUserCart", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)())
], CartController.prototype, "clearUserCart", null);
__decorate([
    (0, common_1.Post)('checkout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)())
], CartController.prototype, "checkout", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('api/profile/cart')
], CartController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzRztBQUl0RyxzQ0FBNkQ7QUFFN0QsaURBQW9EO0FBSTdDLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsWUFDVSxXQUF3QixFQUN4QixZQUEwQjtRQUQxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoQyxDQUFDO0lBRUwsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUV2QixBQUFOLEtBQUssQ0FBQyxZQUFZLENBQVEsR0FBZTtRQUN2QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FDakUsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FDMUIsQ0FBQztRQUVGLE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFBLGlDQUFrQixFQUFDLEtBQUssQ0FBQyxFQUFFO1NBQ2pELENBQUE7SUFDSCxDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUV2QixBQUFOLEtBQUssQ0FBQyxjQUFjLENBQVEsR0FBZSxFQUFVLElBQUk7UUFDdkQsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUMzRCxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxFQUN6QixJQUFJLENBQ0wsQ0FBQTtRQUVELE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFO2dCQUNKLElBQUk7Z0JBQ0osS0FBSyxFQUFFLElBQUEsaUNBQWtCLEVBQUMsS0FBSyxDQUFDO2FBQ2pDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBRXZCLEFBQU4sS0FBSyxDQUFDLGFBQWEsQ0FBUSxHQUFlO1FBQ3hDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpFLE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQTtJQUNILENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBRXZCLEFBQU4sS0FBSyxDQUFDLFFBQVEsQ0FBUSxHQUFlLEVBQVUsSUFBSTtRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLFVBQVUsR0FBRyxtQkFBVSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtZQUUzQixPQUFPO2dCQUNMLFVBQVU7Z0JBQ1YsT0FBTyxFQUFFLGVBQWU7YUFDekIsQ0FBQTtRQUNILENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFBLGlDQUFrQixFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3JDLEdBQUcsSUFBSSxFQUFFLDhDQUE4QztZQUN2RCxNQUFNO1lBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2YsS0FBSztZQUNMLEtBQUs7U0FDTixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxPQUFPO1lBQ0wsVUFBVSxFQUFFLG1CQUFVLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRTtTQUNoQixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFyRlksd0NBQWM7QUFTbkI7SUFETCxJQUFBLFlBQUcsR0FBRTtJQUNjLFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtrREFVeEI7QUFLSztJQURMLElBQUEsWUFBRyxHQUFFO0lBQ2dCLFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtJQUFtQixXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7b0RBY25EO0FBS0s7SUFETCxJQUFBLGVBQU0sR0FBRTtJQUNZLFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTttREFPekI7QUFLSztJQURMLElBQUEsYUFBSSxFQUFDLFVBQVUsQ0FBQztJQUNELFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtJQUFtQixXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7OENBNkI3Qzt5QkFwRlUsY0FBYztJQUQxQixJQUFBLG1CQUFVLEVBQUMsa0JBQWtCLENBQUM7R0FDbEIsY0FBYyxDQXFGMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIERlbGV0ZSwgUHV0LCBCb2R5LCBSZXEsIFBvc3QsIFVzZUd1YXJkcywgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuXHJcbi8vIGltcG9ydCB7IEJhc2ljQXV0aEd1YXJkLCBKd3RBdXRoR3VhcmQgfSBmcm9tICcuLi9hdXRoJztcclxuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXInO1xyXG5pbXBvcnQgeyBBcHBSZXF1ZXN0LCBnZXRVc2VySWRGcm9tUmVxdWVzdCB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5pbXBvcnQgeyBjYWxjdWxhdGVDYXJ0VG90YWwgfSBmcm9tICcuL21vZGVscy1ydWxlcyc7XHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XHJcblxyXG5AQ29udHJvbGxlcignYXBpL3Byb2ZpbGUvY2FydCcpXHJcbmV4cG9ydCBjbGFzcyBDYXJ0Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvLyBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcclxuICAvLyBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxyXG4gIEBHZXQoKVxyXG4gIGFzeW5jIGZpbmRVc2VyQ2FydChAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0KSB7XHJcbiAgICBjb25zdCB7IGNhcnQsIGl0ZW1zIH0gPSBhd2FpdCB0aGlzLmNhcnRTZXJ2aWNlLmZpbmRPckNyZWF0ZUJ5VXNlcklkKFxyXG4gICAgICBnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IEh0dHBTdGF0dXMuT0ssXHJcbiAgICAgIG1lc3NhZ2U6ICdPSycsXHJcbiAgICAgIGRhdGE6IHsgY2FydCwgdG90YWw6IGNhbGN1bGF0ZUNhcnRUb3RhbChpdGVtcykgfSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxyXG4gIC8vIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXHJcbiAgQFB1dCgpXHJcbiAgYXN5bmMgdXBkYXRlVXNlckNhcnQoQFJlcSgpIHJlcTogQXBwUmVxdWVzdCwgQEJvZHkoKSBib2R5KSB7IC8vIFRPRE86IHZhbGlkYXRlIGJvZHkgcGF5bG9hZC4uLlxyXG4gICAgY29uc3QgeyBjYXJ0LCBpdGVtcyB9ID0gYXdhaXQgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVCeVVzZXJJZChcclxuICAgICAgZ2V0VXNlcklkRnJvbVJlcXVlc3QocmVxKSxcclxuICAgICAgYm9keVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IEh0dHBTdGF0dXMuT0ssXHJcbiAgICAgIG1lc3NhZ2U6ICdPSycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXJ0LFxyXG4gICAgICAgIHRvdGFsOiBjYWxjdWxhdGVDYXJ0VG90YWwoaXRlbXMpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcclxuICAvLyBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxyXG4gIEBEZWxldGUoKVxyXG4gIGFzeW5jIGNsZWFyVXNlckNhcnQoQFJlcSgpIHJlcTogQXBwUmVxdWVzdCkge1xyXG4gICAgYXdhaXQgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZChnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXNDb2RlOiBIdHRwU3RhdHVzLk9LLFxyXG4gICAgICBtZXNzYWdlOiAnT0snLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXHJcbiAgLy8gQFVzZUd1YXJkcyhCYXNpY0F1dGhHdWFyZClcclxuICBAUG9zdCgnY2hlY2tvdXQnKVxyXG4gIGFzeW5jIGNoZWNrb3V0KEBSZXEoKSByZXE6IEFwcFJlcXVlc3QsIEBCb2R5KCkgYm9keSkge1xyXG4gICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkRnJvbVJlcXVlc3QocmVxKTtcclxuICAgIGNvbnN0IHsgY2FydCwgaXRlbXMgfSA9IGF3YWl0IHRoaXMuY2FydFNlcnZpY2UuZmluZEJ5VXNlcklkKHVzZXJJZCk7XHJcblxyXG4gICAgaWYgKCFjYXJ0KSB7XHJcbiAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUO1xyXG4gICAgICByZXEuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGVcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZSxcclxuICAgICAgICBtZXNzYWdlOiAnQ2FydCBpcyBlbXB0eScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3RhbCA9IGNhbGN1bGF0ZUNhcnRUb3RhbChpdGVtcyk7XHJcbiAgICBjb25zdCBvcmRlciA9IHRoaXMub3JkZXJTZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICAgIC4uLmJvZHksIC8vIFRPRE86IHZhbGlkYXRlIGFuZCBwaWNrIG9ubHkgbmVjZXNzYXJ5IGRhdGFcclxuICAgICAgdXNlcklkLFxyXG4gICAgICBjYXJ0SWQ6IGNhcnQuaWQsXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgICB0b3RhbCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZCh1c2VySWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IEh0dHBTdGF0dXMuT0ssXHJcbiAgICAgIG1lc3NhZ2U6ICdPSycsXHJcbiAgICAgIGRhdGE6IHsgb3JkZXIgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=