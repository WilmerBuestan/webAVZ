"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLogSchema = exports.RequestLog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let RequestLog = class RequestLog {
    constructor() {
        this.method = '';
        this.originalUrl = '';
        this.statusCode = 0;
        this.contentLength = 0;
        this.elapsedTime = 0;
        this.userAgent = '';
        this.ip = '';
    }
};
exports.RequestLog = RequestLog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RequestLog.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RequestLog.prototype, "originalUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RequestLog.prototype, "statusCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RequestLog.prototype, "contentLength", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RequestLog.prototype, "elapsedTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RequestLog.prototype, "userAgent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RequestLog.prototype, "ip", void 0);
exports.RequestLog = RequestLog = __decorate([
    (0, mongoose_1.Schema)()
], RequestLog);
exports.RequestLogSchema = mongoose_1.SchemaFactory.createForClass(RequestLog);
//# sourceMappingURL=request-log.schema.js.map