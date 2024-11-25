"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const express = __importStar(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const serverless = __importStar(require("serverless-http"));
const port = process.env.PORT || 4000;
async function bootstrap() {
    const expressApp = express();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
    app.enableCors();
    app.use((0, helmet_1.default)());
    await app.init();
    await serverless(expressApp);
    await app.listen(port);
}
bootstrap().then(() => {
    console.log('App is running on %s port', port);
});
let server;
const handler = async (event, context) => {
    if (!server) {
        server = await bootstrap();
    }
    return server(event, context);
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFFM0MsaURBQW1DO0FBQ25DLG9EQUE0QjtBQUM1QiwrREFBMEQ7QUFFMUQsNkNBQXlDO0FBRXpDLDREQUE4QztBQUU5QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEMsS0FBSyxVQUFVLFNBQVM7SUFDdEIsTUFBTSxVQUFVLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFFN0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FDbEMsc0JBQVMsRUFDVCxJQUFJLGlDQUFjLENBQUMsVUFBVSxDQUFDLENBQy9CLENBQUM7SUFFRixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxDQUFDO0lBRWxCLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLE1BQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTdCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxNQUFXLENBQUM7QUFFVCxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBVSxFQUFFLE9BQVksRUFBRSxFQUFFO0lBQ3hELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNaLE1BQU0sR0FBRyxNQUFNLFNBQVMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBTFcsUUFBQSxPQUFPLFdBS2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnO1xuaW1wb3J0IHsgRXhwcmVzc0FkYXB0ZXIgfSBmcm9tICdAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3MnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5pbXBvcnQgKiBhcyBzZXJ2ZXJsZXNzIGZyb20gJ3NlcnZlcmxlc3MtaHR0cCc7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgY29uc3QgZXhwcmVzc0FwcCA9IGV4cHJlc3MoKTtcblxuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoXG4gICAgQXBwTW9kdWxlLFxuICAgIG5ldyBFeHByZXNzQWRhcHRlcihleHByZXNzQXBwKSxcbiAgKTtcblxuICBhcHAuZW5hYmxlQ29ycygpO1xuICBhcHAudXNlKGhlbG1ldCgpKTtcblxuICBhd2FpdCBhcHAuaW5pdCgpO1xuICBhd2FpdCBzZXJ2ZXJsZXNzKGV4cHJlc3NBcHApO1xuXG4gIGF3YWl0IGFwcC5saXN0ZW4ocG9ydCk7XG59XG5ib290c3RyYXAoKS50aGVuKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ0FwcCBpcyBydW5uaW5nIG9uICVzIHBvcnQnLCBwb3J0KTtcbn0pO1xuXG5sZXQgc2VydmVyOiBhbnk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnksIGNvbnRleHQ6IGFueSkgPT4ge1xuICBpZiAoIXNlcnZlcikge1xuICAgIHNlcnZlciA9IGF3YWl0IGJvb3RzdHJhcCgpO1xuICB9XG4gIHJldHVybiBzZXJ2ZXIoZXZlbnQsIGNvbnRleHQpO1xufTtcbiJdfQ==