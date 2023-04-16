"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_NAME = exports.MONGODB_URI = exports.HOST = exports.PORT = void 0;
var env = process.env;
exports.PORT = (_a = env.PORT) !== null && _a !== void 0 ? _a : "8080";
exports.HOST = (_b = env.host) !== null && _b !== void 0 ? _b : "0.0.0.0";
exports.MONGODB_URI = (_c = env.MONGODB_URI) !== null && _c !== void 0 ? _c : "mongodb://localhost:27017";
exports.DATABASE_NAME = (_d = env.DATABASE_NAME) !== null && _d !== void 0 ? _d : "local";
