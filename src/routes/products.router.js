import { Router } from 'express';
import { getProductsController, postProductsController } from '../controllers/products.controllers.js';

const router = new Router();

router.get('/', getProductsController);

router.post('/', postProductsController);

export default router;