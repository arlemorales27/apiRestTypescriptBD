import { Request, Response } from 'express';
import productService from '../services/products.service';

class ProductController {
  async getAll(req: Request, res: Response) {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await productService.getById(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const product = await productService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error creating product' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await productService.update(id, req.body);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error updating product' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await productService.delete(id);
      res.json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product' });
    }
  }
}

export default new ProductController();