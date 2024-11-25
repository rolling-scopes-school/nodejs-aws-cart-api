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
    findUserCart(req) {
        const cart = this.cartService.findOrCreateByUserId((0, shared_1.getUserIdFromRequest)(req));
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: { cart, total: (0, models_rules_1.calculateCartTotal)(cart) },
        };
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    updateUserCart(req, body) {
        const cart = this.cartService.updateByUserId((0, shared_1.getUserIdFromRequest)(req), body);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
            data: {
                cart,
                total: (0, models_rules_1.calculateCartTotal)(cart),
            }
        };
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    clearUserCart(req) {
        this.cartService.removeByUserId((0, shared_1.getUserIdFromRequest)(req));
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
        };
    }
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(BasicAuthGuard)
    checkout(req, body) {
        const userId = (0, shared_1.getUserIdFromRequest)(req);
        const cart = this.cartService.findByUserId(userId);
        if (!(cart && cart.items.length)) {
            const statusCode = common_1.HttpStatus.BAD_REQUEST;
            req.statusCode = statusCode;
            return {
                statusCode,
                message: 'Cart is empty',
            };
        }
        const { id: cartId, items } = cart;
        const total = (0, models_rules_1.calculateCartTotal)(cart);
        const order = this.orderService.create({
            ...body, // TODO: validate and pick only necessary data
            userId,
            cartId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzRztBQUl0RyxzQ0FBNkQ7QUFFN0QsaURBQW9EO0FBSTdDLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsWUFDVSxXQUF3QixFQUN4QixZQUEwQjtRQUQxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoQyxDQUFDO0lBRUwsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUU3QixZQUFZLENBQVEsR0FBZTtRQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5RSxPQUFPO1lBQ0wsVUFBVSxFQUFFLG1CQUFVLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBQSxpQ0FBa0IsRUFBQyxJQUFJLENBQUMsRUFBRTtTQUNoRCxDQUFBO0lBQ0gsQ0FBQztJQUVELDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFFN0IsY0FBYyxDQUFRLEdBQWUsRUFBVSxJQUFJO1FBQ2pELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFN0UsT0FBTztZQUNMLFVBQVUsRUFBRSxtQkFBVSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUU7Z0JBQ0osSUFBSTtnQkFDSixLQUFLLEVBQUUsSUFBQSxpQ0FBa0IsRUFBQyxJQUFJLENBQUM7YUFDaEM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFFN0IsYUFBYSxDQUFRLEdBQWU7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTNELE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQTtJQUNILENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBRTdCLFFBQVEsQ0FBUSxHQUFlLEVBQVUsSUFBSTtRQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDakMsTUFBTSxVQUFVLEdBQUcsbUJBQVUsQ0FBQyxXQUFXLENBQUM7WUFDMUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7WUFFM0IsT0FBTztnQkFDTCxVQUFVO2dCQUNWLE9BQU8sRUFBRSxlQUFlO2FBQ3pCLENBQUE7UUFDSCxDQUFDO1FBRUQsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUEsaUNBQWtCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDckMsR0FBRyxJQUFJLEVBQUUsOENBQThDO1lBQ3ZELE1BQU07WUFDTixNQUFNO1lBQ04sS0FBSztZQUNMLEtBQUs7U0FDTixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxPQUFPO1lBQ0wsVUFBVSxFQUFFLG1CQUFVLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRTtTQUNoQixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFqRlksd0NBQWM7QUFTekI7SUFEQyxJQUFBLFlBQUcsR0FBRTtJQUNRLFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtrREFRbEI7QUFLRDtJQURDLElBQUEsWUFBRyxHQUFFO0lBQ1UsV0FBQSxJQUFBLFlBQUcsR0FBRSxDQUFBO0lBQW1CLFdBQUEsSUFBQSxhQUFJLEdBQUUsQ0FBQTtvREFXN0M7QUFLRDtJQURDLElBQUEsZUFBTSxHQUFFO0lBQ00sV0FBQSxJQUFBLFlBQUcsR0FBRSxDQUFBO21EQU9uQjtBQUtEO0lBREMsSUFBQSxhQUFJLEVBQUMsVUFBVSxDQUFDO0lBQ1AsV0FBQSxJQUFBLFlBQUcsR0FBRSxDQUFBO0lBQW1CLFdBQUEsSUFBQSxhQUFJLEdBQUUsQ0FBQTs4Q0E4QnZDO3lCQWhGVSxjQUFjO0lBRDFCLElBQUEsbUJBQVUsRUFBQyxrQkFBa0IsQ0FBQztHQUNsQixjQUFjLENBaUYxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgRGVsZXRlLCBQdXQsIEJvZHksIFJlcSwgUG9zdCwgVXNlR3VhcmRzLCBIdHRwU3RhdHVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG4vLyBpbXBvcnQgeyBCYXNpY0F1dGhHdWFyZCwgSnd0QXV0aEd1YXJkIH0gZnJvbSAnLi4vYXV0aCc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UgfSBmcm9tICcuLi9vcmRlcic7XG5pbXBvcnQgeyBBcHBSZXF1ZXN0LCBnZXRVc2VySWRGcm9tUmVxdWVzdCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZUNhcnRUb3RhbCB9IGZyb20gJy4vbW9kZWxzLXJ1bGVzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbkBDb250cm9sbGVyKCdhcGkvcHJvZmlsZS9jYXJ0JylcbmV4cG9ydCBjbGFzcyBDYXJ0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2VcbiAgKSB7IH1cblxuICAvLyBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgLy8gQFVzZUd1YXJkcyhCYXNpY0F1dGhHdWFyZClcbiAgQEdldCgpXG4gIGZpbmRVc2VyQ2FydChAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0KSB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuY2FydFNlcnZpY2UuZmluZE9yQ3JlYXRlQnlVc2VySWQoZ2V0VXNlcklkRnJvbVJlcXVlc3QocmVxKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogSHR0cFN0YXR1cy5PSyxcbiAgICAgIG1lc3NhZ2U6ICdPSycsXG4gICAgICBkYXRhOiB7IGNhcnQsIHRvdGFsOiBjYWxjdWxhdGVDYXJ0VG90YWwoY2FydCkgfSxcbiAgICB9XG4gIH1cblxuICAvLyBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgLy8gQFVzZUd1YXJkcyhCYXNpY0F1dGhHdWFyZClcbiAgQFB1dCgpXG4gIHVwZGF0ZVVzZXJDYXJ0KEBSZXEoKSByZXE6IEFwcFJlcXVlc3QsIEBCb2R5KCkgYm9keSkgeyAvLyBUT0RPOiB2YWxpZGF0ZSBib2R5IHBheWxvYWQuLi5cbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS51cGRhdGVCeVVzZXJJZChnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpLCBib2R5KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGU6IEh0dHBTdGF0dXMuT0ssXG4gICAgICBtZXNzYWdlOiAnT0snLFxuICAgICAgZGF0YToge1xuICAgICAgICBjYXJ0LFxuICAgICAgICB0b3RhbDogY2FsY3VsYXRlQ2FydFRvdGFsKGNhcnQpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICAvLyBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxuICBARGVsZXRlKClcbiAgY2xlYXJVc2VyQ2FydChAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0KSB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZChnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiBIdHRwU3RhdHVzLk9LLFxuICAgICAgbWVzc2FnZTogJ09LJyxcbiAgICB9XG4gIH1cblxuICAvLyBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgLy8gQFVzZUd1YXJkcyhCYXNpY0F1dGhHdWFyZClcbiAgQFBvc3QoJ2NoZWNrb3V0JylcbiAgY2hlY2tvdXQoQFJlcSgpIHJlcTogQXBwUmVxdWVzdCwgQEJvZHkoKSBib2R5KSB7XG4gICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkRnJvbVJlcXVlc3QocmVxKTtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5maW5kQnlVc2VySWQodXNlcklkKTtcblxuICAgIGlmICghKGNhcnQgJiYgY2FydC5pdGVtcy5sZW5ndGgpKSB7XG4gICAgICBjb25zdCBzdGF0dXNDb2RlID0gSHR0cFN0YXR1cy5CQURfUkVRVUVTVDtcbiAgICAgIHJlcS5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlLFxuICAgICAgICBtZXNzYWdlOiAnQ2FydCBpcyBlbXB0eScsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpZDogY2FydElkLCBpdGVtcyB9ID0gY2FydDtcbiAgICBjb25zdCB0b3RhbCA9IGNhbGN1bGF0ZUNhcnRUb3RhbChjYXJ0KTtcbiAgICBjb25zdCBvcmRlciA9IHRoaXMub3JkZXJTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICAuLi5ib2R5LCAvLyBUT0RPOiB2YWxpZGF0ZSBhbmQgcGljayBvbmx5IG5lY2Vzc2FyeSBkYXRhXG4gICAgICB1c2VySWQsXG4gICAgICBjYXJ0SWQsXG4gICAgICBpdGVtcyxcbiAgICAgIHRvdGFsLFxuICAgIH0pO1xuICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlQnlVc2VySWQodXNlcklkKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiBIdHRwU3RhdHVzLk9LLFxuICAgICAgbWVzc2FnZTogJ09LJyxcbiAgICAgIGRhdGE6IHsgb3JkZXIgfVxuICAgIH1cbiAgfVxufVxuIl19