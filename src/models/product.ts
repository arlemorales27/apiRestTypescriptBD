import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/db';

interface ProductAttributes {
  id: number;
  name: string;
  price: number; 
}

interface ProductCreationAttributes extends InferAttributes<Product> {
  name: string;
  price: number;
}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  declare id: number;
  declare name: string;
  declare price: number;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'product'
});

export default Product;