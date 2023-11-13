"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = __importDefault(require("../services/products.service"));
class ProductController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield products_service_1.default.getAll();
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching products' });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const product = yield products_service_1.default.getById(id);
                res.json(product);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching product' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield products_service_1.default.create(req.body);
                res.status(201).json(product);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating product' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const product = yield products_service_1.default.update(id, req.body);
                res.json(product);
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating product' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                yield products_service_1.default.delete(id);
                res.json({ message: 'Product deleted' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting product' });
            }
        });
    }
}
exports.default = new ProductController();
