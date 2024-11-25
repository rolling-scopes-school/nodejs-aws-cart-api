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
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = __importStar(require("supertest"));
const app_module_1 = require("./../src/app.module");
describe('AppController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUyZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmUyZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBc0Q7QUFFdEQsbURBQXFDO0FBQ3JDLG9EQUFnRDtBQUVoRCxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO0lBQ25DLElBQUksR0FBcUIsQ0FBQztJQUUxQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDcEIsTUFBTSxhQUFhLEdBQWtCLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ2xFLE9BQU8sRUFBRSxDQUFDLHNCQUFTLENBQUM7U0FDckIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsR0FBRyxHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzVDLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDUixNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0LCBUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJztcbmltcG9ydCB7IElOZXN0QXBwbGljYXRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgKiBhcyByZXF1ZXN0IGZyb20gJ3N1cGVydGVzdCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuLy4uL3NyYy9hcHAubW9kdWxlJztcblxuZGVzY3JpYmUoJ0FwcENvbnRyb2xsZXIgKGUyZSknLCAoKSA9PiB7XG4gIGxldCBhcHA6IElOZXN0QXBwbGljYXRpb247XG5cbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlRml4dHVyZTogVGVzdGluZ01vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG4gICAgICBpbXBvcnRzOiBbQXBwTW9kdWxlXSxcbiAgICB9KS5jb21waWxlKCk7XG5cbiAgICBhcHAgPSBtb2R1bGVGaXh0dXJlLmNyZWF0ZU5lc3RBcHBsaWNhdGlvbigpO1xuICAgIGF3YWl0IGFwcC5pbml0KCk7XG4gIH0pO1xuXG4gIGl0KCcvIChHRVQpJywgKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0KGFwcC5nZXRIdHRwU2VydmVyKCkpXG4gICAgICAuZ2V0KCcvJylcbiAgICAgIC5leHBlY3QoMjAwKVxuICAgICAgLmV4cGVjdCgnSGVsbG8gV29ybGQhJyk7XG4gIH0pO1xufSk7XG4iXX0=