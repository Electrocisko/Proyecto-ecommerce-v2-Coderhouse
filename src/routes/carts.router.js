import { Router } from "express";
import { getCartsControllers, postCartsControllers } from '../controllers/carts.controllers.js';

const router = new Router();

router.get('/', getCartsControllers);

router.post('/',postCartsControllers);

export default router;