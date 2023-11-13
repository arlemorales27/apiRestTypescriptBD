"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_route_1 = __importDefault(require("./routes/products.route"));
const errorHandler_1 = require("./middlware/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/products', products_route_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;