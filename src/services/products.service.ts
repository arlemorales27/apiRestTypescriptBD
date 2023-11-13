import Product from '../models/product';


class ProductService {

  async getAll() {
    return await Product.findAll();
  }

  async getById(id: number) {
    return await Product.findByPk(id);
  }

  async create(data: any) {
    return await Product.create(data);
  }

  async update(id: number, data: any) {
    const product = await this.getById(id);
    if (product) {
      product.set(data);
      return await product.save();
    }
    throw new Error("Product not found");
  }

  async delete(id: number) {
    return await Product.destroy({ where: { id } });
  }

}

export default new ProductService();