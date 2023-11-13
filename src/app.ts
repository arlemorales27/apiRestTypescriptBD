import express from 'express';
import productRoutes from './routes/products.route'; 
import { errorHandler } from './middlware/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use(errorHandler);

export default app;