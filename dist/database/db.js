"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '2703',
    database: 'mydb'
});
