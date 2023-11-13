"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize: db_1.sequelize,
    modelName: 'product'
});
exports.default = Product;
